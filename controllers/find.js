const db = require("../models");
const personaje = db.character;

const findByFilter = async (req, res) => {
  try {
    const { nombre, edad, peliculas } = req.query;
    const key = nombre || edad || peliculas;
    switch (key) {
      case nombre: {
        const nameResult = await personaje.findOne({
          where: { nombre: nombre },
        });
        res.status(200).json({ data: nameResult });
        break;
      }
      case edad: {
        const ageResult = await personaje.findAll({ where: { edad: edad } });
        res.status(200).json({ data: ageResult });
        break;
      }
      case peliculas: {
        const movieResult = await personaje.findAll({
          where: { peliculas: parseInt(peliculas) },
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
