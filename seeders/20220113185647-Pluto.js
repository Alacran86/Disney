'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personajes', [{
      nombre: 'Pluto',
      edad: '90 años',
      peso: '45Kg',
      historia:'Pluto generalmente caracteriza al perro de Mickey Mouse, aunque también ha sido la mascota del Pato Donald y de Goofy o Tribilín. De forma inusual para los personajes creados por Disney para la serie Mickey Mouse, Pluto no está antropomorfizado, tan solo posee un amplio rango de expresiones faciales.',
      peliculas:'El dia del juicio final de Pluto, Problema oseo, Mamá Pluto',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisney.fandom.com%2Fes%2Fwiki%2FGoofy&psig=AOvVaw2-UzvuidBQC7dE9VBQRWrf&ust=1642186552313000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj56tizr_UCFQAAAAAdAAAAABAD',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personajes', null, {});
  }
};