var path = require('path');
const sharp = require('sharp');
const joi = require('joi');

const { MediaModel } = require('../../models/Media');

const { joiValidate, InformationTypes } = require('../../middleware/validation');
const { isObjectID } = require('../../utils');

const turnSizeIntoNumberBeforeValidation = () => (req, res, next) => {
  if (req.query?.size) req.query.size = Number(req.query.size);
  next();
};

module.exports.get = [
  turnSizeIntoNumberBeforeValidation(),
  joiValidate({ id: joi.custom(isObjectID).required() }, InformationTypes.PARAMS),
  joiValidate({ size: joi.number().max(500) }, InformationTypes.QUERY),
  async (req, res) => {
    const currentFile = await MediaModel.findOne({ _id: req.params.id });
    if (!currentFile) return res.status(404).json('File not found');

    if (req.query?.size) {
      res.writeHead(200, {
        'Content-Type': 'image/jpg',
      });
      return sharp(currentFile.path).resize(req.query.size, req.query.size, { fit: 'inside' }).pipe(res);
    }

    res.sendFile(path.resolve(currentFile.path));
  },
];
