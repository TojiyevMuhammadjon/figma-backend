const { Schema, model } = require("mongoose");

const addAuthor = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    dateOfDeath: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
      min: 10,
      max: 255,
    },
    imageName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Author", addAuthor);
