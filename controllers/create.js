const db = require("../models");
const personaje = db.character;

const createCharacter = async (req, res) => {
  try {
    const characters = await personaje.create(req.body);
    res.json(characters);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createCharacter };
