'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Employees', [
        {
          firstName: 'hadi',
          lastName: 'nw',
          email: 'hadi@mail.com',
          totalPoints: 22,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          firstName: 'max',
          lastName: 'mew',
          email: 'hadi@mail.com',
          totalPoints: 0,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          firstName: 'zenps',
          lastName: 'xone',
          email: 'hadi@mail.com',
          totalPoints: 50,
          createdAt: new Date,
          updatedAt: new Date
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Person', null, {});
  
  }
};
