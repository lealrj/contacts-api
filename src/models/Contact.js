const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
 name: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 email: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
  validate: {
   isEmail: true,
  }
 },
 phone: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
  validate: {
   is: /^[0-9]{10}$/,
  }
 },
 favorite: {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: false
 },
}, {
 tableName: 'contacts',
 timestamps: true
});

module.exports = Contact;