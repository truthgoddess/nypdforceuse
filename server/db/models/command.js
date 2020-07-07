const Sequelize = require('sequelize')
const db = require('../db')

const Command = db.define('command', {
  commandType: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  codeId: {
    type: Sequelize.STRING
  }
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
