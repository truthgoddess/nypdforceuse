const {
  Command,
  SubjectInjury,
  OfficerInjury,
  IncidentsForceType,
  IncidentsBasisEncounter,
  TimeFrame,
  InjuryType,
  EncounterCategory,
  ForceCategory,
} = require('../db/models')

//the following functions are used for the admin routes to put data in database
async function batchCreateSubjectInjury(subjectInjuryData) {
  for (let i = 0; i < subjectInjuryData.length; i++) {
    let item = subjectInjuryData[i]
    let [timeFrame] = await TimeFrame.findOrCreate({
      where: {year: item.year, quarter: item.quarter},
    })
    let [command] = await Command.findOrCreate({
      where: {commandName: item.command},
    })
    let [injuryType] = await InjuryType.findOrCreate({
      where: {type: item.subjectInjury},
    })
    await SubjectInjury.create({
      onDuty: item.onDuty,
      offDuty: item.offDuty,
      injuryTypeId: injuryType.id,
      commandId: command.id,
      timeFrameId: timeFrame.id,
    })
  }
}

async function batchCreateOfficerInjury(officerInjuryData) {
  for (let i = 0; i < officerInjuryData.length; i++) {
    let item = officerInjuryData[i]
    let [timeFrame] = await TimeFrame.findOrCreate({
      where: {year: item.year, quarter: item.quarter},
    })
    let [command] = await Command.findOrCreate({
      where: {commandName: item.command},
    })
    let [injuryType] = await InjuryType.findOrCreate({
      where: {type: item.officerInjury},
    })
    await OfficerInjury.create({
      onDuty: item.onDuty,
      offDuty: item.offDuty,
      injuryTypeId: injuryType.id,
      commandId: command.id,
      timeFrameId: timeFrame.id,
    })
  }
}

async function batchCreateIncidentsForceType(incidentsForceTypeData) {
  for (let i = 0; i < incidentsForceTypeData.length; i++) {
    let item = incidentsForceTypeData[i]
    let [timeFrame] = await TimeFrame.findOrCreate({
      where: {year: item.year, quarter: item.quarter},
    })
    let [command] = await Command.findOrCreate({
      where: {commandName: item.command},
    })
    let [forceCategory] = await ForceCategory.findOrCreate({
      where: {type: item.forceCategory},
    })
    await IncidentsForceType.create({
      onDuty: item.onDuty,
      offDuty: item.offDuty,
      forceCategoryId: forceCategory.id,
      commandId: command.id,
      timeFrameId: timeFrame.id,
    })
  }
}

async function batchCreateIncidentsBasisEncounter(incidentsBasisEncounterData) {
  for (let i = 0; i < incidentsBasisEncounterData.length; i++) {
    let item = incidentsBasisEncounterData[i]
    let [timeFrame] = await TimeFrame.findOrCreate({
      where: {year: item.year, quarter: item.quarter},
    })
    let [encounterCategory] = await EncounterCategory.findOrCreate({
      where: {type: item.basisForEncounter},
    })
    await IncidentsBasisEncounter.create({
      count: item.count,
      encounterCategoryId: encounterCategory.id,
      timeFrameId: timeFrame.id,
    })
  }
}

module.exports = {
  batchCreateIncidentsBasisEncounter,
  batchCreateIncidentsForceType,
  batchCreateOfficerInjury,
  batchCreateSubjectInjury,
}
