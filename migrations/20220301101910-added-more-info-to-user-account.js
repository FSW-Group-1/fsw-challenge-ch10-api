'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn('User_accounts', 'description', {
        type: Sequelize.STRING,
      });
      await queryInterface.addColumn('User_accounts', 'imageLink', {
        type: Sequelize.STRING,
      });
      await queryInterface.addColumn('User_accounts', 'point', {
        type: Sequelize.INTEGER,
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
    
  },

  async down (queryInterface, Sequelize) {
    try {
      await queryInterface.dropColumn('User_accounts', 'description');
      await queryInterface.dropColumn('User_accounts', 'imageLink');
      await queryInterface.dropColumn('User_accounts', 'point');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
};
