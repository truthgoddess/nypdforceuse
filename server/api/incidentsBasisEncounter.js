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

//year, quarter
//1  a      a
//2  a      :
//3  :      a
//4  :      :

//1 a      a   <--All Year, All Quarter
router.get('/allYear/allQuarter', async function (req, res, next) {
  try {
    let incidentBasisEncounterData = await IncidentsBasisEncounter.findAll({
      attributes: ['count'],
      include: [
        {model: EncounterCategory, attributes: ['type']},
        {model: TimeFrame, attributes: ['year', 'quarter']},
      ],
    })
    res.json({
      incidentBasisEncounterData: incidentBasisEncounterData,
    })
    console.log(
      'api/graphData/incidentsBasisEncounter/allYear/allQuarter route'
    )
  } catch (error) {
    next(error)
  }
})

//2  a       :  <--All Year, Specific Quarter
router.get('/allYear/:quarter', async function (req, res, next) {
  try {
    let timeFrame = await TimeFrame.findAll({
      where: {quarter: req.params.quarter},
    })
    let timeFrameIds = timeFrame.map((item) => item.id)
    let incidentBasisEncounterData = []
    for (let i = 0; i < timeFrameIds.length; i++) {
      incidentBasisEncounterData = [
        ...incidentBasisEncounterData,
        ...(await IncidentsBasisEncounter.findAll({
          where: {timeFrameId: timeFrameIds[i]},
          attributes: ['count'],
          include: [
            {model: EncounterCategory, attributes: ['type']},
            {model: TimeFrame, attributes: ['year', 'quarter']},
          ],
        })),
      ]
    }
    res.json({
      incidentBasisEncounterData: incidentBasisEncounterData,
    })
    console.log('api/graphData/incidentsBasisEncounter/allYear/:quarter route')
  } catch (error) {
    next(error)
  }
})

//3  :      a  <--Specific Year, All Quarters
router.get('/:year/allQuarter/', async function (req, res, next) {
  try {
    let timeFrame = await TimeFrame.findAll({
      where: {year: req.params.year},
    })
    let timeFrameIds = timeFrame.map((item) => item.id)
    let incidentBasisEncounterData = []
    for (let i = 0; i < timeFrameIds.length; i++) {
      incidentBasisEncounterData = [
        ...incidentBasisEncounterData,
        ...(await IncidentsBasisEncounter.findAll({
          where: {timeFrameId: timeFrameIds[i]},
          attributes: ['count'],
          include: [
            {model: EncounterCategory, attributes: ['type']},
            {model: TimeFrame, attributes: ['year', 'quarter']},
          ],
        })),
      ]
    }
    res.json({
      incidentBasisEncounterData: incidentBasisEncounterData,
    })
    console.log('api/graphData/incidentsBasisEncounter/:year/allQuarter route')
  } catch (error) {
    next(error)
  }
})

//6  :      :   <--Specific Year, Specific Quarter
router.get('/:year/:quarter', async function (req, res, next) {
  try {
    let timeFrame = await TimeFrame.findAll({
      where: {year: req.params.year, quarter: req.params.quarter},
    })
    let timeFrameIds = timeFrame.map((item) => item.id)
    let incidentBasisEncounterData = []
    for (let i = 0; i < timeFrameIds.length; i++) {
      incidentBasisEncounterData = [
        ...incidentBasisEncounterData,
        ...(await IncidentsBasisEncounter.findAll({
          where: {timeFrameId: timeFrameIds[i]},
          attributes: ['count'],
          include: [
            {model: EncounterCategory, attributes: ['type']},
            {model: TimeFrame, attributes: ['year', 'quarter']},
          ],
        })),
      ]
    }
    res.json({
      incidentBasisEncounterData: incidentBasisEncounterData,
    })
    console.log('api/graphData/incidentsBasisEncounter/:year/:quarter')
  } catch (error) {
    next(error)
  }
})
