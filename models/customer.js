'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     customer.hasMany(models.order, {
        as: 'orders',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      });
      
     
    
    }
  }
  customer.init({
     id: {
        allowNull: false,
        primaryKey: true,
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
       city: {
        type: DataTypes.STRING,
        allowNull:false
       },
      password: {
        type: DataTypes.STRING
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
    modelName: 'customer',
  });
  return customer;
};