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

//year, quarter, duty, command
//1  a      a      a       a
//2  a      a      a       :
//3  a      a      :       a
//6  a      a      :       :
//4  a      :      a       a
//7  a      :      a       :
//8  a      :      :       a
//12 a      :      :       :
//5  :      a      a       a
//10 :      a      a       :
//9  :      a      :       a
//13 :      a      :       :
//11 :      :      a       a
//14 :      :      a       :
//15 :      :      :       a
//16 :      :      :       :

//1 a      a      a       a  <--All Time, All Injuries, Off + On Duty, All Commands
router.get('/allYear/allQuarter/allDuty/allCommand', async function (
  req,
  res,
  next
) {
  try {
    let incidentsForceTypeData = await IncidentsForceType.findAll({
      attributes: ['onDuty', 'offDuty'],
      include: [
        {model: Command, attributes: ['commandName']},
        {model: ForceCategory, attributes: ['type']},
        {model: TimeFrame, attributes: ['year', 'quarter']},
      ],
    })
    res.json({
      forceTypeData: incidentsForceTypeData,
    })
    console.log(
      'api/graphData/incidentsForceType/allYear/allQuarter/allDuty/allCommand route'
    )
  } catch (error) {
    next(error)
  }
})

//2  a      a      a       :  <--All Time, All Injuries, Off + On Duty, Specific Command
router.get('/allYear/AllQuarter/allDuty/:command', async function (
  req,
  res,
  next
) {
  try {
    let command = await Command.findOne({
      where: {commandName: req.params.command},
    })
    let incidentsForceTypeData = await IncidentsForceType.findAll({
      where: {commandId: command.id},
      attributes: ['onDuty', 'offDuty'],
      include: [
        {model: Command, attributes: ['commandName']},
        {model: ForceCategory, attributes: ['type']},
        {model: TimeFrame, attributes: ['year', 'quarter']},
      ],
    })
    res.json({
      forceTypeData: incidentsForceTypeData,
    })
    console.log(
      'api/graphData/incidentsForceType/allYear/AllQuarter/allDuty/:command route'
    )
  } catch (error) {
    next(error)
  }
})

//3  a      a      :       a  <--All Time, All Injuries, Specific Duty, All Command
router.get('/allYear/allQuarter/:duty/allCommand', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/allYear/allQuarter/:duty/allCommand route'
    )
  } catch (error) {
    next(error)
  }
})

//6  a      a      :       :  <--AllTime, All Injuries, Specific Duty, Specific Command
router.get('/allYear/allQuarter/:duty/:command', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/allYear/allQuarter/:duty/:command route'
    )
  } catch (error) {
    next(error)
  }
})

//4  a      :      a       a  <--All Years, Specific Quarter, All Injuries, All Duty, All Command
router.get('/allYear/:quarter/allDuty/allCommand/', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/allYear/:quarter/allDuty/allCommand/ route'
    )
  } catch (error) {
    next(error)
  }
})

//7  a      :      a       :  <--All Years, Specific Quarter, All Injuries, All Duty, Specific Command
router.get('/allYear/:quarter/allDuty/:command', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/allYear/:quarter/allDuty/:command route'
    )
  } catch (error) {
    next(error)
  }
})

//8  a      :      :       a  <--All Years, Specific Quarter, All Injuries, Specific Duty, All Command
router.get('/allYear/:quarter/:duty/allCommand', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/allYear/:quarter/:duty/allCommand route'
    )
  } catch (error) {
    next(error)
  }
})

//12 a      :      :       :  <--All Years, Specific Quarters, All Injuries, Specific Duty, Specific Command
router.get('/allYear/:quarter/:duty/:command', async function (req, res, next) {
  try {
    console.log(
      'api/graphData/incidentsForceType/allYear/:quarter/:duty/:command'
    )
  } catch (error) {
    next(error)
  }
})

//5  :      a      a       a  <--Specific Year, All Quarters, All Injuries, All Duty, All Command
router.get('/:year/allQuarter/allDuty/allCommand', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/allQuarter/allDuty/allCommand route'
    )
  } catch (error) {
    next(error)
  }
})

//10 :      a      a       :  <--Specific Year, All Quarters, All Injuries, All Duty, Specific Command
router.get('/:year/allQuarter/allDuty/:command', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/allQuarter/allDuty/:command'
    )
  } catch (error) {
    next(error)
  }
})

//9  :      a      :       a  <--Specific Year, All Quarters, All Injuries, Specific Duty, All Command
router.get('/:year/allQuarter/:duty/allCommand', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/allQuarter/:duty/allCommand'
    )
  } catch (error) {
    next(error)
  }
})

//13 :      a      :       :  <--Specific Year, All Quarters, All Injuries, Specific Duty, Specific Command
router.get('/:year/allQuarter/:duty/:command', async function (req, res, next) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/allQuarter/:duty/:command'
    )
  } catch (error) {
    next(error)
  }
})

//11 :      :      a       a  <--Specific Year, Specific Quarter, All Injuries, All Duty, All Command
router.get('/:year/:quarter/allDuty/allCommand', async function (
  req,
  res,
  next
) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/:quarter/allDuty/allCommand'
    )
  } catch (error) {
    next(error)
  }
})

//14 :      :      a       :  <--Specific Year, Specific Quarters, All Injuries, All Duty, Specific Command
router.get('/:year/:quarter/allDuty/:command', async function (req, res, next) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/:quarter/allDuty/:command'
    )
  } catch (error) {
    next(error)
  }
})

//15 :      :      :       a  <--Specific Year, Specific Quarters, All Injuries, Specific Duty, All Command
router.get('/:year/:quarter/:duty/allCommand', async function (req, res, next) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/:quarter/:duty/allCommand'
    )
  } catch (error) {
    next(error)
  }
})

//16 :      :      :       :  <--Specific Year, Specific Quarters, All Injuries, Specific Duty, Specific Command
router.get('/:year/:quarter/:duty/:command', async function (req, res, next) {
  try {
    console.log(
      'api/graphData/incidentsForceType/:year/:quarter/:duty/:command'
    )
  } catch (error) {
    next(error)
  }
})
