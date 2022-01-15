const db = require("../models");
const personaje = db.character;

const del = async (req, res) => {
  try {
    await personaje.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: "Se ha eliminado correctamente" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { del };
