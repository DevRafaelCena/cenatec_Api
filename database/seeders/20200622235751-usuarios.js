'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [{
      nome: 'rafael',
      email: 'rafael.cena@hotmail.com',
      cpf: '11111111111',          
      senha: bcrypt.hashSync('11111111111', 10),      
      tipo_usuario: 1, 
      status: true,
      token: '34sd34gj',
      created_at: new Date(),
      updated_at: new Date()
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
