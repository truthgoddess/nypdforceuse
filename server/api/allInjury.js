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

//time, duty, command
// a      a      a
// a      a      :
// a      :      a
// :      a      a
// a      :      :
// :      :      a
// :      a      :
// :      :      :

router.get('allTime/allDuty/allCommand', async function (req, res, next) {
  try {
    console.log('allTime/allDuty/allCommand got')
  } catch (error) {
    next(error)
  }
})

router.get('allTime/allDuty/:command', async function (req, res, next) {
  try {
    console.log('allTime/allDuty/:command got')
  } catch (error) {
    next(error)
  }
})

router.get('allTime/allCommand/:onOffDuty', async function (req, res, next) {
  try {
    console.log('allTime/allCommand/:onOffDuty got')
  } catch (error) {
    next(error)
  }
})

router.get('allTime/:onOffDuty/:command', async function (req, res, next) {
  try {
    console.log('Officer Injury')
  } catch (error) {
    next(error)
  }
})
