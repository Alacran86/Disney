'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pelicula.init({
    titulo: DataTypes.STRING,
    imagen: DataTypes.STRING,
    fechaCreacion: DataTypes.STRING,
    calificacion: DataTypes.STRING,
    personajesAsociados: DataTypes.STRING,
    genero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};