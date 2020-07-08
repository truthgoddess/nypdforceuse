const Sequelize = require('sequelize')
const db = require('../db')

const TimeFrame = db.define('timeFrame', {
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quarter: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = TimeFrame

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
