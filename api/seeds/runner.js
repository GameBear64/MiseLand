const fs = require('fs').promises;

const { UserModel } = require('../models/User');
const { CategoryModel } = require('../models/Category');
const { ProductModel } = require('../models/Product');
const { MediaModel } = require('../models/Media');

module.exports = async () => {
  // ================ USERS ===================
  const usersArray = require('./data/user.json');

  usersArray.forEach(user => {
    UserModel.updateOne({ email: user.email }, user, { upsert: true }).then(result => {
      if (result.upsertedId) console.log(`Upserted ${user.name}`, result);
    });
  });

  // ================ CATEGORIES ===================
  const categoriesArray = require('./data/categories.json');

  categoriesArray.forEach(category => {
    CategoryModel.updateOne({ title: category.title }, category, { upsert: true }).then(result => {
      if (result.upsertedId) console.log(`Upserted ${category.title}`, result);
    });
  });

  // ================ PRODUCTS ===================
  const productsArray = require('./data/products.json');

  for await (const [key, product] of productsArray.entries()) {
    // console.log('results', product);
    const exists = await ProductModel.findOne({ title: product.title });

    if (exists) continue;

    let imgIds = [];
    for await (const [key2, image] of product.images.entries()) {
      const { id: authorId } = await UserModel.findOne({ name: product.author });
      const userPath = `uploads/${authorId}`;
      const filePath = `${userPath}/${key}-${key2}.png`;

      await fs
        .stat(userPath)
        .catch(async () => await fs.mkdir(userPath))
        .then(() => fs.appendFile(filePath, image));

      const { id } = await MediaModel.findOneAndUpdate(
        { path: filePath },
        { author: authorId, path: filePath },
        { upsert: true }
      );

      imgIds.push(id);
    }

    ProductModel.updateOne({ title: product.title }, { product, images: imgIds }, { upsert: true }).then(result => {
      if (result.upsertedId) console.log(`Upserted ${product.title}`, result);
    });
  }

  // ================ COMMENTS ===================
};
