const joi = require('joi');

const { ProductModel } = require('../../models/Product');
const { UserModel } = require('../../models/User');

const { joiValidate, InformationTypes } = require('../../middleware/validation');
const { isObjectID } = require('../../utils');

module.exports.get = [
  joiValidate({ id: joi.custom(isObjectID) }, InformationTypes.PARAMS),
  async (req, res) => {
    const user = await UserModel.findOne({ _id: req.params.id });

    const products = await ProductModel.find({ author: user.id });

    res.status(200).json({ user, products });
  },
];
