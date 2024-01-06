const joi = require('joi');
const throttle = require('express-throttle');
const { UserModel } = require('../models/User');
const { createJWT, cleanObject } = require('../utils');
const { joiValidate } = require('../middleware/validation');

module.exports.post = [
  throttle({ burst: 5, period: '10s' }),
  joiValidate({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().min(10).max(255).required().email(),
    password: joi.string().min(8).max(255).required(), //TODO: better password security
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
  }),
  async (req, res) => {
    const userExists = await UserModel.findOne({ email: req.body.email });
    if (userExists) return res.status(409).json('User with this email already exists');

    const user = await UserModel.create(req.body);

    return res.status(201).json({
      user: cleanObject(user.toJSON(), ['_id', 'name', 'role']),
      token: createJWT(user),
    });
  },
];
