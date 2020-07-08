const Sequelize = require('sequelize')
const db = require('../db')

const IncidentsForceType = db.define('incidentsForceType', {
  onDuty: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  offDuty: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = IncidentsForceType

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
