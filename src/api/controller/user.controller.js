const User = require("../models/web.user.scheme");
const { generateHash, compareHash } = require("../../libs/bcrypt");
const jwt = require("../../libs/jwt");

const register = async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;
  const findUser = await User.find({ email: email });

  if (findUser.length)
    return res
      .status(500)
      .json({ message: "This email address is already in use." });

  const generate = await generateHash(password);

  const newUser = await User.create({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    password: generate,
  });
  res.status(200).json({ message: "Created successfully", user: newUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.find({ email: email });

  if (!findUser.length)
    return res.status(400).json({ message: "User not found" });

  const hashedPass = await compareHash(password, findUser[0].password);

  if (!hashedPass)
    return res.status(400).json({ message: "Incorrect password" });

  const token = jwt.sign({ userId: findUser[0].id });
  res.cookie("token", token);
  res
    .status(200)
    .json({ message: "User successfully signed in", token: token });
};

module.exports = {
  register,
  login,
};
