const { Schema, model, mongoose } = require("mongoose");

const addBook = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pages: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    description: {
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

module.exports = model("Book", addBook);
