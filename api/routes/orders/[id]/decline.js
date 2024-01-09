const joi = require('joi');

const { OrderModel } = require('../../../models/Order');

const { joiValidate, InformationTypes } = require('../../../middleware/validation');
const { isObjectID } = require('../../../utils');

module.exports.post = [
  joiValidate({ id: joi.custom(isObjectID) }, InformationTypes.PARAMS),
  async (req, res) => {
    const product = await OrderModel.findOne({ _id: req.params.id }).populate('product').populate('author');

    if (product.product.author._id.toString() !== req.apiUserId || product.author.id !== req.apiUserId)
      return res.status(403).json('You can not advance this order');

    await product.decline();

    res.status(200).json();
  },
];
