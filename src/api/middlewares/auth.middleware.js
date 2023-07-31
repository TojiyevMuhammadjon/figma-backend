const jwt = require("../../libs/jwt");
const cookie = require("cookie-parser");

const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookie;

    if (!token)
      return res.status(401).json({ message: "Invalid token provided!" });

    const verify = jwt.verify(token);

    req.user = verify;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token provided!" });
  }
};

module.exports = isAuth;
