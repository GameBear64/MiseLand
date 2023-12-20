const joi = require('joi');
const { joiValidate, InformationTypes } = require('../../../middleware/validation');
const { isObjectID } = require('../../../utils');

module.exports.post = [
  joiValidate({ id: joi.custom(isObjectID).required() }, InformationTypes.PARAMS),
  joiValidate({ quantity: joi.number().min(1).required() }, InformationTypes.QUERY),
  async (req, res) => {
    res.status(200).json({ id: req.params.id, q: req.query.quantity });
  },
];
