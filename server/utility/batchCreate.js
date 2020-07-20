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

async function batchCreateSubjectInjury(subjectInjuryData) {
  await Promise.all(
    subjectInjuryData.map(async (item) => {
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
    })
  )
}

async function batchCreateOfficerInjury(officerInjuryData) {
  await Promise.all(
    officerInjuryData.map(async (item) => {
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
    })
  )
}
async function batchCreateIncidentsForceType(incidentsForceTypeData) {
  await Promise.all(
    incidentsForceTypeData.map(async (item) => {
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
    })
  )
}

async function batchCreateIncidentsBasisEncounter(incidentsBasisEncounterData) {
  await Promise.all(
    incidentsBasisEncounterData.map(async (item) => {
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
    })
  )
}

module.exports = {
  batchCreateIncidentsBasisEncounter,
  batchCreateIncidentsForceType,
  batchCreateOfficerInjury,
  batchCreateSubjectInjury,
}
