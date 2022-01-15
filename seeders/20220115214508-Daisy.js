'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personajes', [{
      nombre: 'Daisy',
      edad: '80 años',
      peso: '40Kg',
      historia:'Aunque es la novia de Donald, ocasionalmente tiene citas con Narciso Bello. Daisy tiene el temperamento de Donald, pero es un poco más sofisticada. Daisy es la tía de Juanito, Jorgito y Jaimito, ya que es hermana del esposo de Della.',
      peliculas:'El Señor Pato Sale Afuera, El problema doble de Donald, Abajo y fuera con el pato Donald',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdoblaje.fandom.com%2Fes%2Fwiki%2FPata_Daisy&psig=AOvVaw1kdjt4gTtd0ModHLQlNlLp&ust=1642368620917000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCF-vbZtPUCFQAAAAAdAAAAABAD',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personajes', null, {});
  }
};