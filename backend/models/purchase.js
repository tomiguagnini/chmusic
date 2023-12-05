const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Song = require('./song');
const User = require('./user');

const Purchase = sequelize.define('Purchase', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  PurchaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  TotalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  State: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});




module.exports = Purchase;
