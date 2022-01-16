const bcrypt = require("bcryptjs");
const db = require("../../models");
const user = db.user;
const { validationResult } = require("express-validator");

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errores: errors.array() });
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10);
  await user.create(req.body);
  res.json(user);
};

module.exports = { register };
