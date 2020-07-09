'use strict'
const {
  officerInjuryData,
  subjectInjuryData,
  incidentsBasisEncounterData,
  incidentsForceTypeData,
} = require('./seedData')

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
} = require('../server/db/models')

const db = require('../server/db')

async function seed() {
  await db.sync({force: true})

  //officer injury seed
  await Promise.all(
    officerInjuryData.map(async (item) => {
      try {
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
      } catch (error) {
        console.log(error)
      }
    })
  )

  //subjectInjury seed
  await Promise.all(
    subjectInjuryData.map(async (item) => {
      try {
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
      } catch (error) {
        console.log(error)
      }
    })
  )
  //incidentsBasisEncounter seed
  await Promise.all(
    incidentsForceTypeData.map(async (item) => {
      try {
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
      } catch (error) {
        console.log(error)
      }
    })
  )
  //incidentsForceType seed
  await Promise.all(
    incidentsBasisEncounterData.map(async (item) => {
      try {
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
      } catch (error) {
        console.log(error)
      }
    })
  )
  console.log('db synced!')
}

// incidentsBasisEncounter.forEach((item) => {})

//incidentsForceType seed
// incidentsForceType.forEach((item) => {})

// const users = await Promise.all([
//   User.create({email: 'cody@email.com', password: '123'}),
//   User.create({email: 'murphy@email.com', password: '123'})
// ])

// console.log(`seeded ${users.length} users`)
// console.log(`seeded successfully`)

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
