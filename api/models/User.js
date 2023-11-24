const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Role } = require('../enums');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      select: false,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.User,
    },
    passwordChangedAt: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    this.password = bcrypt.hashSync(this.password, 10);

    this.passwordChangedAt = Date.now() - 1000;
  }

  next();
});

exports.UserModel = mongoose.model('User', userSchema);
