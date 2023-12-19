const joi = require('joi');
const fs = require('fs').promises;
const codes = require('referral-codes');

const { joiValidate } = require('../../middleware/validation');

const { MediaModel } = require('../../models/Media');

module.exports.post = [
  joiValidate({
    data: joi.string().required(),
    type: joi.string().max(5).regex(/\w+/).required(),
  }),
  async (req, res) => {
    const fileName = codes.generate({ length: 20 })[0];
    const userPath = `uploads/${req.apiUserId}`;
    const filePath = `${userPath}/${fileName}.${req.body.type}`;

    await fs
      .stat(userPath)
      .catch(async () => await fs.mkdir(userPath))
      .then(() => fs.appendFile(filePath, req.body.data));

    const { id } = await MediaModel.create({ author: req.apiUserId, path: filePath });

    return res.status(201).json(id);
  },
];
