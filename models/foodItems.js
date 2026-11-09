'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foodItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      foodItems.belongsTo(models.categories,{
        foreignKey: "categoryId",
        as: "Category",
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      })
      foodItems.belongsToMany(models.order, {
        through: "orderItems",
        onUpdate:"RESTRICT",
        onDelete:"CASCADE"
      })
    }
  }
  foodItems.init({
     id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      foodName: {
        type: DataTypes.STRING,
      allownull:false
      },
      description: {
        type: DataTypes.STRING,
      allownull:false
      },
      price: {
        type: DataTypes.INTEGER,
     allownull:false
      },
      categoryId: {
        type:DataTypes.UUID,
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
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'foodItems',
    tableName:'foodItems',
  timestamp:true
  });
  return foodItems;
};