const Sequelize = require('sequelize')
const db = require('../db')

const OfficerInjury = db.define('officerInjury', {
  onDuty: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  offDuty: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = OfficerInjury

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
