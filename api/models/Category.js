const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    hexColor: {
      type: String,
    },
  },
  { timestamps: true }
);

exports.CategoryModel = mongoose.model('Category', categorySchema);
