const joi = require('joi');

const { UserModel } = require('../../../models/User');
const { ProductModel } = require('../../../models/Product');

const { joiValidate, InformationTypes } = require('../../../middleware/validation');
const { isObjectID } = require('../../../utils');

module.exports.post = [
  joiValidate({ id: joi.custom(isObjectID).required() }, InformationTypes.PARAMS),
  async (req, res) => {
    const product = await ProductModel.findOne({ _id: req.params.id });
    if (!product) return res.status(404).json('No such product');

    const user = await UserModel.findOne({ _id: req.apiUserId }).populate({
      path: 'cart',
      populate: {
        path: 'product',
        model: 'Product',
      },
    });

    user.cart = user.cart.filter(item => item.product?._id?.toString() !== req.params.id.toString());

    user.markModified('cart');
    user.save();

    res.status(200).json(user.cart);
  },
];
