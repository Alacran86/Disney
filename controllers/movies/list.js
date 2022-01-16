const db = require("../../models");
const peliculas = db.movie;

const list = async (req, res) => {
  try {
    const movies = await peliculas.findAll({
        attributes: ['titulo', 'imagen', 'fechaCreacion']
    });
    res.json(movies);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { list };
