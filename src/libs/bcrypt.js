const bcrypt = require("bcrypt");

const generateHash = async (password) => {
  return await bcrypt.hash(password, 10);
};

const compareHash = async (password, hashedPass) => {
  return await bcrypt.compare(password, hashedPass);
};

module.exports = {
  generateHash,
  compareHash,
};
