const { model, Schema } = require("mongoose");

const Register = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 4,
      max: 16,
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

module.exports = model("Users", Register);
