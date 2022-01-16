const db = require("../models");
const personajes = db.character;

const list = async (req, res) => {
  try {
    const characters = await personajes.findAll({
        attributes: ['nombre', 'imagen']
    });
    res.json(characters);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { list };
