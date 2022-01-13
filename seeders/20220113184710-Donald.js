'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personajes', [{
      nombre: 'Donald',
      edad: '88 años',
      peso: '40Kg',
      historia:'Caracterizado como un pato blanco antropomórfico de ojos celestes, pico, piernas y pies anaranjados. Generalmente viste una camisa de estilo marinero y un sombrero, sin pantalones, excepto cuando va a nadar. Respecto a su personalidad, Donald suele intentar ver las cosas con positivismo y alegría (aunque muchas veces acaba montando en cólera cuando se le tuercen las cosas).',
      peliculas:'Los 3 caballeros, Fantasia, El dragon chiflado',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisney.fandom.com%2Fes%2Fwiki%2FPato_Donald&psig=AOvVaw2BRtrsUWcXEcTV5WE64-57&ust=1642186303598000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCLqeKyr_UCFQAAAAAdAAAAABAO',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personajes', null, {});
  }
};