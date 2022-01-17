'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('peliculas', [{
      titulo: 'Fantasia',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSX8oi8tWitnsErlCtlMqM0hqNH1dCgjmoipJWAcqULCP2ecI',
      fechaCreacion: '1940',
      calificacion:'4/5',
      personajesAsociados:'Mickey',
      genero: 'Musical',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('peliculas', null, {});
  }
};