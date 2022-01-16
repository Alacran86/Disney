const db = require("../../models");
const pelicula = db.movie;

const del = async (req, res) => {
  try {
    await pelicula.destroy({
      where: { id: req.params.id },
    });
    res.json({ success: "Se ha eliminado correctamente" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { del };
