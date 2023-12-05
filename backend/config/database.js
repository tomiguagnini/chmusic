const { Sequelize } = require('sequelize');
const {db_url} = require('../config/variables')
const sequelize = new Sequelize(db_url,{logging: false}) // Example for postgres

module.exports = sequelize;