const db = require("../models");
const personaje = db.character;

const byid = async (req, res) => {
  try {
    const characters = await personaje.findOne({
      where: { id: req.params.id },
    });
    res.json(characters);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { byid };
