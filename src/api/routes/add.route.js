const { Router } = require("express");
const { addBook, addAuthor } = require("../controller/add.controller");
const isAuth = require("../middlewares/auth.middleware")

const add = Router();

add.post("/add/book", addBook);
add.post("/add/author", addAuthor);

module.exports = add;
