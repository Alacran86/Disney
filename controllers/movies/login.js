const bcrypt = require("bcryptjs");
const db = require("../../models");
const user = db.user;
const moment = require("moment");
const jwt = require("jwt-simple");

const login = async (req, res) => {
  const usuario = await user.findOne({ where: { email: req.body.email } });
  if (usuario) {
    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (iguales) {
      res.json({ success: createToken(usuario) });
    } else {
      res.json({ error: "Usuario o contraseña incorrectos" });
    }
  } else {
    res.json({ error: "Usuario o contraseña incorrectos" });
  }
};

const createToken = (usuario) => {
  const payload = {
    usarioId: usuario.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(20, "minutes").unix(),
  };
  return jwt.encode(payload, "frase secreta");
};

module.exports = { login };
