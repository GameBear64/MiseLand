const ObjectId = require('mongoose').Types.ObjectId;
const { OrderModel } = require('../../models/Order');

module.exports.get = async (req, res) => {
  const products = await OrderModel.aggregate([
    {
      $lookup: {
        from: 'products',
        localField: 'product',
        foreignField: '_id',
        as: 'product',
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        pipeline: [{ $project: { name: 1 } }],
        as: 'author',
      },
    },
    {
      $unwind: '$product',
    },
    {
      $unwind: '$author',
    },
    {
      $match: {
        'product.author': new ObjectId(req.apiUserId),
      },
    },
  ]);

  res.status(200).json(products);
};
