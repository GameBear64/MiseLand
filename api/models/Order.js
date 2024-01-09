const mongoose = require('mongoose');
const { Status } = require('../enums');

const orderSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.Pending,
    },
    estimatedDeliveryDate: Date,
    // comment: { //remember why you cemented this, comments will be on the product ONLY if there is an order
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Comment',
    // },
  },
  { timestamps: true }
);

orderSchema.methods.advance = async function () {
  switch (this.status) {
    case Status.Pending:
      this.status = Status.Processing;
      break;
    case Status.Processing:
      this.status = Status.Delivering;
      break;
    case Status.Delivering:
      this.status = Status.Completed;
      break;
  }

  this.save();
  return;
};

orderSchema.methods.decline = async function () {
  this.status = Status.Declined;
  this.save();

  return;
};

exports.OrderModel = mongoose.model('Order', orderSchema);
