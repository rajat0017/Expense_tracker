const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const expense = sequelize.define('expenses', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  expense: Sequelize.STRING,
  catagary: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = expense;
