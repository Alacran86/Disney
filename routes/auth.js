const express = require("express");
const Router = express.Router();
const { register } = require("./../controllers/characters/register");
const { login } = require("./../controllers/characters/login");
const { check } = require("express-validator");

Router.post("/login", login);

Router.post(
  "/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
  ],
  register
);

module.exports = Router;
