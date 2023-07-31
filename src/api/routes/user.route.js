const { Router } = require("express");
const { register, login } = require("../controller/user.controller");

const user = Router();

user.post("/user/login", login);
user.post("/user/register", register);

module.exports = user;