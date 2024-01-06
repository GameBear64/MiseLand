const joi = require('joi');

const { UserModel } = require('../../../models/User');
const { ProductModel } = require('../../../models/Product');

const { joiValidate, InformationTypes } = require('../../../middleware/validation');
const { isObjectID } = require('../../../utils');

module.exports.post = [
  joiValidate({ id: joi.custom(isObjectID).required() }, InformationTypes.PARAMS),
  joiValidate({ quantity: joi.number().min(1).required() }, InformationTypes.QUERY),
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

    const isInCart = user.cart.find(item => item.product?._id?.toString() === req.params.id.toString());

    if (isInCart) {
      user.cart[user.cart.indexOf(isInCart)].quantity += Number(req.query.quantity);
    } else {
      user.cart.push({ product, quantity: req.query.quantity });
    }

    user.markModified('cart');
    user.save();

    res.status(200).json(user.cart);
  },
];
