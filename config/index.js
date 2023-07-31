require("dotenv/config");

const config = {
    port: process.env.PORT,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
}

module.exports = config;