'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('Orders',{

    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      status: {
        type: Sequelize.ENUM('Pending', 'Preparing', 'Ready', 'Delivered'),
      allownull:false
      },
      totalprice: {
        type: Sequelize.INTEGER,
     allownull:false
      },
      customerId: {
        type:Sequelize.UUID,
        allownull: false,
        references: {
          model:"customers",
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
  };

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
