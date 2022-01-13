'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('personajes', [{
      nombre: 'Goofy',
      edad: '90 años',
      peso: '60Kg',
      historia:'Goofy (también conocido como Tribilín) es un personaje de ficción creado por Walt Disney. Es uno de los mejores amigos de Mickey Mouse. Padre de Maximiliano "Max" Goof, a diferencia de la mayoría de los personajes (Mickey, Minnie, Donald…) que suelen ser tíos.',
      peliculas:'Saludos Amigos,Diversion y Fantasia, El principe y el mendigo',
      imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisney.fandom.com%2Fes%2Fwiki%2FGoofy&psig=AOvVaw2-UzvuidBQC7dE9VBQRWrf&ust=1642186552313000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj56tizr_UCFQAAAAAdAAAAABAD',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('personajes', null, {});
  }
};