const Sequelize = require('sequelize')
const db = require('../db')

const IncidentsBasisEncounter = db.define('incidentsBasisEncounter', {
  count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = IncidentsBasisEncounter

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
