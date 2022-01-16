const db = require("../../models");
const pelicula = db.movie;

const update = async (req, res) => {
  try {
    await pelicula.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ success: "Se ha modificado correctamente" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { update };
