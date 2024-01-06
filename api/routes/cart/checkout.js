const { UserModel } = require('../../models/User');
const { OrderModel } = require('../../models/Order');
const { ProductModel } = require('../../models/Product');

module.exports.post = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.apiUserId }).populate({
    path: 'cart',
    populate: {
      path: 'product',
      model: 'Product',
    },
  });

  user.cart.forEach(async item => {
    await OrderModel.create({
      product: item.product,
      quantity: item.quantity,
      author: user,
    });
  });

  user.cart = [];

  user.markModified('cart');
  user.save();

  res.status(200).json();
};
