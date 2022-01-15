'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personajes', [{
      nombre: 'Minnie',
      edad: '80 años',
      peso: '40Kg',
      historia:'Es la eterna novia de Mickey Mouse y junto a él debutó en Plane Crazy, el 15 de mayo de 1928, aunque alcanzó el éxito junto a Mickey en el tercer episodio de ambos, Steamboat Willie',
      peliculas:'El Maravilloso mundo de Mickey Mouse, Mickey Mouse y los súperpilotos, La Casa de Mickey Mouse',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisney.fandom.com%2Fes%2Fwiki%2FMinnie_Mouse&psig=AOvVaw0Tfh-lGFCDpZrEuvShtN9l&ust=1642368265746000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj5rs3YtPUCFQAAAAAdAAAAABAD',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personajes', null, {});
  }
};