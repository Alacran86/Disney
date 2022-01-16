'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  personaje.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.STRING,
    peso: DataTypes.STRING,
    historia: DataTypes.STRING,
    peliculas: DataTypes.ARRAY(DataTypes.STRING),
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personaje',
  });
  return personaje;
};