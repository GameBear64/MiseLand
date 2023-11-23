const ObjectId = require('mongoose').Types.ObjectId;
const joi = require('joi');

/**
 * Skips route if nothing has changed
 */
exports.skipIfNoChanges = () => (req, res, next) => {
  if (Object.keys(req.body).length === 0) return res.json(200);
  next();
};

/**
 * Checks if a value is a valid ObjectID or not. (joi)
 */
exports.isObjectID = (value, helper) => {
  return ObjectId.isValid(value) || helper.message('Invalid Id');
};

exports.InformationTypes = Object.freeze({
  BODY: 'body',
  PARAMS: 'params',
  QUERY: 'query',
});

// prettier-ignore
exports.joiValidate = (schema, realm = 'body') => (req, res, next) => {
  let validation = joi.object(schema).validate(req[realm]);
  if (validation.error) return res.status(400).json(validation.error.details[0].message);

  next();
};
