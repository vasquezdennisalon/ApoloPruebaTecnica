const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('User', {

  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  address: {
    type: DataTypes.TEXT
  },

  userActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },

  coworkerContractIds: {
    type: DataTypes.JSON,
    defaultValue: []
  }

}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;