'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('foodItems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      foodName: {
        type: Sequelize.STRING,
      allownull:false
      },
      description: {
        type: Sequelize.STRING,
      allownull:false
      },
      price: {
        type: Sequelize.INTEGER,
     allownull:false
      },
      categoryId: {
        type:Sequelize.UUID,
        allownull: false,
        references: {
          model:"categories",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('foodItems');
  }
};