const bcrypt = require("bcryptjs");
const db = require("../../models");
const user = db.user;
const { validationResult } = require("express-validator");
const {send} = require("../../services/nodemailer");

const register = async (req, res) => {
  try {
  
  const {username, password, email} = req.body;
  const nuevo = {
    username,
    password : bcrypt.hashSync(password, 10),
    email
  };
  const nuevoUsuario = await user.create(nuevo);
  const mailinfo = {
    to: email,
    subject: "Gracias por registrarte :D"
}
const mensaje = await send(mailinfo);
res.json(mensaje);
} catch (err) {
  console.error(err);
}
// req.body.password = bcrypt.hashSync(req.body.password, 10);
  // await user.create(req.body);
  // res.json(user);

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errores: errors.array() });
  // }

  
};

  



module.exports = { register };
