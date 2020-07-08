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
  console.log('db synced!')
  //officer injury seed
  let thing = await Promise.all(
    officerInjuryData.map(async (item) => {
      try {
        let [timeFrame, timeFrameCreated] = await TimeFrame.findOrCreate({
          where: {year: item.year, quarter: item.quarter},
        })
        let [command, commandCreated] = await Command.findOrCreate({
          where: {commandName: item.command},
        })
        let [injuryType, injuryTypeCreated] = await InjuryType.findOrCreate({
          where: {type: item.officerInjury}, //should have named it type, but...
        })
        let officerInjuryIncident = await OfficerInjury.create({
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
}

//subject injury seed
// subjectInjury.forEach((item) => {})

//incidentsBasisEncounter seed
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
