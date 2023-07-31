const BookAdd = require("../models/add.book.scheme");
const AuthorAdd = require("../models/add.author.scheme");
const { v4: uuid } = require("uuid");
const path = require("path");

const addBook = async (req, res) => {
  try {
    const { title, pages, year, price, country, author, description } =
      req.body;
    const { image } = req.files;

    const imageName = `${uuid()}${path.extname(image.name)}`;
    image.mv(process.cwd() + "/uploads/" + imageName);

    // const author1 = await BookAdd.find(author).populate("author");

    const books = await BookAdd.create({
      title: title,
      pages: pages,
      year: year,
      price: price,
      country: country,
      author: author,
      description: description,
      imageName: imageName,
    });
    res.status(200).json({ message: "Successfully created!", Book: books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const addAuthor = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, dateOfDeath, country, bio } =
      req.body;
    const { image } = req.files;

    const imageName = `${uuid()}${path.extname(image.name)}`;
    image.mv(process.cwd() + "/uploads/" + imageName);

    const newAuthor = await AuthorAdd.create({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      dateOfDeath: dateOfDeath,
      country: country,
      bio: bio,
      imageName: imageName,
    });
    res
      .status(200)
      .json({ message: "Successfully created!", Author: newAuthor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addAuthor,
  addBook,
};
