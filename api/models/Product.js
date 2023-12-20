const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
      },
    ],
  },
  { timestamps: true }
);

exports.ProductModel = mongoose.model('Product', productSchema);
