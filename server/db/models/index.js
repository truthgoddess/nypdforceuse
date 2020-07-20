const Command = require('./command')
const SubjectInjury = require('./subjectInjury')
const OfficerInjury = require('./officerInjury')
const IncidentsForceType = require('./incidentsForceType')
const IncidentsBasisEncounter = require('./incidentsBasisEncounter')
const TimeFrame = require('./timeFrame')
const InjuryType = require('./injuryType')
const EncounterCategory = require('./encounterCategory')
const ForceCategory = require('./forceCategory')
const User = require('./user')

Command.hasMany(SubjectInjury)
SubjectInjury.belongsTo(Command)
Command.hasMany(OfficerInjury)
OfficerInjury.belongsTo(Command)
Command.hasMany(IncidentsForceType)
IncidentsForceType.belongsTo(Command)
TimeFrame.hasMany(SubjectInjury)
SubjectInjury.belongsTo(TimeFrame)
TimeFrame.hasMany(OfficerInjury)
OfficerInjury.belongsTo(TimeFrame)
TimeFrame.hasMany(IncidentsForceType)
IncidentsForceType.belongsTo(TimeFrame)
TimeFrame.hasMany(IncidentsBasisEncounter)
IncidentsBasisEncounter.belongsTo(TimeFrame)
InjuryType.hasMany(SubjectInjury)
SubjectInjury.belongsTo(InjuryType)
InjuryType.hasMany(OfficerInjury)
OfficerInjury.belongsTo(InjuryType)
ForceCategory.hasMany(IncidentsForceType)
IncidentsForceType.belongsTo(ForceCategory)
EncounterCategory.hasMany(IncidentsBasisEncounter)
IncidentsBasisEncounter.belongsTo(EncounterCategory)

module.exports = {
  Command,
  SubjectInjury,
  OfficerInjury,
  IncidentsForceType,
  IncidentsBasisEncounter,
  TimeFrame,
  InjuryType,
  EncounterCategory,
  ForceCategory,
  User,
}
