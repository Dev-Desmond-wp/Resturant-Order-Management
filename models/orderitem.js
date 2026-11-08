'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {

      OrderItem.belongsTo(models.order, {
        foreignKey: 'orderId',
        as: 'order'
      });

      OrderItem.belongsTo(models.foodItems, {
        foreignKey: 'foodItemId',
        as: 'foodItem'
      });

    }
  }

  OrderItem.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    orderId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    foodItemId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'OrderItems'
  });

  return OrderItem;
};