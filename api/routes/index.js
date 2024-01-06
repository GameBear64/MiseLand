const { UserModel } = require('../models/User');
const { cleanObject } = require('../utils');

module.exports.get = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.apiUserId }).populate({
    path: 'cart',
    populate: {
      path: 'product',
      model: 'Product',
    },
  });

  res.status(200).json(cleanObject(user, ['_id', 'name', 'role', 'cart']));
};
