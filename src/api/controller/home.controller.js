const User = require("../models/users.scheme");
const { generateHash, compareHash } = require("../../libs/bcrypt");
const jwt = require("../../libs/jwt");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const findUser = await User.find({ username: username });
    if (!findUser.length)
      return res.status(404).json({ message: "User not found" });

    const hashedPass = await compareHash(password, findUser[0].password);

    if (!hashedPass)
      return res.status(400).json({ message: "Wrong password!" });
    const token = jwt.sign({ userId: findUser.id });

    res.cookie("token", token);

    res
      .status(200)
      .json({ message: "User successfully signed in!", token: token });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const findUser = await User.find({ username: username });

    if (findUser.length)
      return res.status(401).json({ message: "User already registered" });

    const generate = await generateHash(password);

    const newUser = new User({ username: username, password: generate });

    await newUser.save();

    res
      .status(200)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  register,
};
