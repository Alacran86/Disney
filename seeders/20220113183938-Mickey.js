'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personajes', [{
      nombre: 'Mickey Mouse',
      edad: '90 años',
      peso: '40Kg',
      historia:'Mickey Mouse es un personaje ficticio estadounidense de la serie del mismo nombre, emblema de la compañía Disney',
      peliculas:'Fantasia,Mickey celebra la navidad, Los 3 mosqueteros',
      imagen: 'https://www.hola.com/imagenes/ninos/20201120179570/peliculas-infantiles-mickey-mouse/0-891-377/fantasia-a.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personajes', null, {});
  }
};