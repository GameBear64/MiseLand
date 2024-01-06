const joi = require('joi');
const throttle = require('express-throttle');
const { UserModel } = require('../models/User');
const { createJWT, cleanObject } = require('../utils');
const { joiValidate } = require('../middleware/validation');

module.exports.post = [
  throttle({ burst: 5, period: '10s' }),
  joiValidate({
    email: joi.string().required(), // Implied validation from /register
    password: joi.string().alphanum().required(),
  }),
  async (req, res) => {
    const userAttempting = await UserModel.findOne({ email: req.body.email }).select('+password');
    if (!userAttempting) return res.status(404).json('User does not exists');

    const validPassword = await userAttempting.validatePassword(req.body?.password);
    if (!validPassword) return res.status(404).json('Incorrect password');

    return res.status(200).json({
      user: cleanObject(userAttempting.toJSON(), ['_id', 'name', 'role']),
      token: createJWT(userAttempting),
    });
  },
];
