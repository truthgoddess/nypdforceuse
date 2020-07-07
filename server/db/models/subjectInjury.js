const Sequelize = require('sequelize')
const db = require('../db')

const SubjectInjury = db.define('subjectInjury', {
  onDuty: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  count: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = SubjectInjury

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
