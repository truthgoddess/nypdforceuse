const router = require('express').Router()
const Sequelize = require('sequelize')
const {
  batchCreateSubjectInjury,
  batchCreateOfficerInjury,
  batchCreateIncidentsBasisEncounter,
  batchCreateIncidentsForceType,
} = require('../utility/batchCreate')
module.exports = router

const checkIfAdmin = (req, res, next) => {
  if (req.user === undefined || !req.user.isAdmin) {
    const error = new Error('illegal action')
    error.status = 401
    return next(error)
  }
  next()
}

router.post('/uploadSubjectInjuries', checkIfAdmin, async (req, res, next) => {
  try {
    await batchCreateSubjectInjury(req.body)
    res.send()
  } catch (error) {
    next(error)
  }
})

router.post('/uploadOfficerInjuries', checkIfAdmin, async (req, res, next) => {
  try {
    await batchCreateOfficerInjury(req.body)
    res.send()
  } catch (error) {
    next(error)
  }
})

router.post(
  '/uploadIncidentsForceType',
  checkIfAdmin,
  async (req, res, next) => {
    try {
      await batchCreateIncidentsForceType(req.body)
      res.send()
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/uploadIncidentsBasisEncounter',
  checkIfAdmin,
  async (req, res, next) => {
    try {
      await batchCreateIncidentsBasisEncounter(req.body)
      res.send()
    } catch (error) {
      next(error)
    }
  }
)
