const { model, Schema } = require("mongoose");

const Register = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 4,
      max: 16,
    },
    lastName: {
      type: String,
      required: true,
      min: 8,
      max: 16,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 16,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("WebUser", Register);
