const db = require("../../models");
const personaje = db.character;

const update = async (req, res) => {
  try {
    await personaje.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ success: "Se ha modificado correctamente" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { update };
