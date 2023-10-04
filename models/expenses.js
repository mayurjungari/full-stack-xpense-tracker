const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Mayur@123', {
    dialect: 'mysql',
    host: 'localhost',
});

const Etracker = sequelize.define('expense', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true, 
    allowNull: false,
  },
  Price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  Desc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Reason: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  tableName: 'expense', 
  timestamps: false,
});

module.exports = Etracker;
