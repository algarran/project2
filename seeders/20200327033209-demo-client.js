'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients' [{
      firstName: 'John',
      lastName: 'Doe',
      phone: '816-555-0001',
      email: 'john@deer.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Clients', null, {});
  }
};
