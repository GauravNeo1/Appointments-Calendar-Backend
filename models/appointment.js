const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Appointment = sequelize.define('Appointment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Appointment;
