const Sequelize = require('sequelize')
const db = require('../db')

const ForceCategory = db.define('forceCategory', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = ForceCategory

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
