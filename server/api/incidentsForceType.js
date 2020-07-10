const router = require('express').Router()
const {
  User,
  Command,
  EncounterCategory,
  ForceCategory,
  IncidentsBasisEncounter,
  IncidentsForceType,
  InjuryType,
  OfficerInjury,
  SubjectInjury,
  TimeFrame,
} = require('../db/models')
module.exports = router

router.get('/:year/:quarter/:onOffDuty/:command', async function (
  req,
  res,
  next
) {
  try {
    console.log('Officer Injury')
  } catch (error) {
    next(error)
  }
})
