const Sequelize = require('sequelize')
const db = require('../db')

const EncounterCategory = db.define('encounterCategory', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = EncounterCategory

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
