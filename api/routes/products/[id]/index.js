const joi = require('joi');

const { ProductModel } = require('../../../models/Product');

const { joiValidate, InformationTypes } = require('../../../middleware/validation');
const { isObjectID } = require('../../../utils');

module.exports.get = [
  joiValidate({ id: joi.custom(isObjectID) }, InformationTypes.PARAMS),
  async (req, res) => {
    const product = await ProductModel.findOne({ _id: req.params.id }).populate('author');

    res.status(200).json(product);
  },
];
