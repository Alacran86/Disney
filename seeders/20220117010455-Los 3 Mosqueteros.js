'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('peliculas', [{
      titulo: 'Los 3 Mosqueteros',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH_CxbzFUofqNW4Rkm9k0z1D-jw__s80BOjayeHnM0genPF2U',
      fechaCreacion: '2004',
      calificacion:'3/5',
      personajesAsociados:'Mickey, Donald, Goofy',
      genero: 'Infantil/Aventura',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('peliculas', null, {});
  }
};