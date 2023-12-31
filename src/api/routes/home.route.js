const { Router } = require("express");
const { register, login } = require("../controller/home.controller");

const router = Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;