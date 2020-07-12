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

router.use('/officerInjury', require('./officerInjury'))
router.use('/subjectInjury', require('./subjectInjury'))
router.use('/allInjury', require('./allInjury'))
router.use('/incidentsForceType', require('./incidentsForceType'))
router.use('/incidentsBasisEncounter', require('./incidentsBasisEncounter'))

//tableName options: OfficerInjury, SubjectInjury, AllInjury, IncidentsForceType, IncidentsBasisEncounter
//year options: all, 2020, 2019, 2018, 2017
//quarter options: all, 1, 2, 3, 4
//onOffDuty options: all, on, off

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email'],
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })
