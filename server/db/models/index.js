const Command = require('./command')
const SubjectInjury = require('./subjectInjury')
const OfficerInjury = require('./officerInjury')
const IncidentsForceType = require('./incidentsForceType')
const IncidentsBasisEncounter = require('./incidentsBasisEncounter')
const TimeFrame = require('./timeFrame')
const InjuryType = require('./injuryType')
const EncounterCategory = require('./encounterCategory')
const ForceCategory = require('./forceCategory')

/*
 *    put associations here: ex. BlogPost.belongsTo(User)
 */

module.exports = {
  Command,
  SubjectInjury,
  OfficerInjury,
  IncidentsForceType,
  IncidentsBasisEncounter,
  TimeFrame,
  InjuryType,
  EncounterCategory,
  ForceCategory
}
