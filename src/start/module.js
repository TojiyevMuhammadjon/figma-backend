const fileUpload = require("express-fileupload");
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const routes = require("../api/routes");

const modules = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(fileUpload());
  app.use(cors());
  app.use(cookie());

  app.use(express.static(process.cwd() + "/src/api/public"));
  app.use(express.static(process.cwd() + "/uploads"));

  app.use(routes);
};

module.exports = modules;
