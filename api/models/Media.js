const mongoose = require('mongoose');
const fs = require('fs').promises;

const mediaSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

mediaSchema.virtual('type').get(function () {
  return this.path.toString().split('.').pop();
});

mediaSchema.pre(/^delete/, { document: true, query: false }, async function (next) {
  await fs.rm(this.path);

  next();
});

exports.MediaModel = mongoose.model('Media', mediaSchema);
