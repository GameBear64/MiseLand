const { OrderModel } = require('../../models/Order');

module.exports.get = async (req, res) => {
  const products = await OrderModel.find({ author: req.apiUserId }).populate('product');

  res.status(200).json(products);
};
