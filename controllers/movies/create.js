const db = require("../../models");
const pelicula = db.movie;

const createMovie = async (req, res) => {
  try {
    const movie = await pelicula.create(req.body);
    res.json(movie);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createMovie };
