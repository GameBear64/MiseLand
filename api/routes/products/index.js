const { ProductModel } = require('../../models/Product');

module.exports.get = async (req, res) => {
  const products = await ProductModel.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    { $unwind: '$category' },
    {
      $group: {
        _id: '$category.title',
        products: { $push: '$$ROOT' },
      },
    },
  ]);

  res.status(200).json(products);
};
