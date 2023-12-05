const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Song = sequelize.define('Song', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Listening:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  File:{
    type: DataTypes.STRING,
    allowNull: false
  }
});




module.exports = Song;
