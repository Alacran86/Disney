const db = require("../../models");
const pelicula = db.movie;

const findByFilter = async (req, res) => {
  try {
    const { nombre, genero, orden } = req.query;
    const key = nombre || genero || orden;
    switch (key) {
      case nombre: {
        const nameResult = await pelicula.findOne({
          where: { titulo: nombre },
        });
        res.status(200).json({ data: nameResult });
        break;
      }
      case genero: {
        const genreResult = await pelicula.findAll({ where: { genero: genero } });
        res.status(200).json({ data: genreResult });
        break;
      }
      case orden: {
        const movieResult = await pelicula.findAll({
          include: [{ model: db.genre, attributes: ['nombre'] }]
        });
        res.status(200).json({ data: movieResult });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { findByFilter };
