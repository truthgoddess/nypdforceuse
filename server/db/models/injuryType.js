const Sequelize = require('sequelize')
const db = require('../db')

const InjuryType = db.define('injuryType', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = InjuryType

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
