'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // definessociation here
    order.belongsTo(models.customer,{
        foreignKey: "customerId",
        as: "customer",
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      })
      order.belongsToMany(models.foodItems, {
        through: "orderItems",
        onUpdate:"RESTRICT",
        onDelete:"CASCADE"
      })
    }
  }
  order.init({
     id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Preparing', 'Ready', 'Delivered'),
      allownull:false
      },
      totalprice: {
        type: DataTypes.INTEGER,
     allownull:false
      },
      customerId: {
        type:DataTypes.UUID,
        allownull: false,
        references: {
          model:"customer",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'order',
    tableName:'order',
  timestamp:true
  });
  return order;
};
