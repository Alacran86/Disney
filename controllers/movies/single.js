const db = require("../../models");
const pelicula = db.movie;

const byid = async (req, res) => {
  try {
    const movie = await pelicula.findOne({
      where: { id: req.params.id },
    });
    res.json(movie);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { byid };
