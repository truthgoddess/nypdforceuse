const Sequelize = require('sequelize')
const db = require('../db')

const Command = db.define('command', {
  commandName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
})

module.exports = Command

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
