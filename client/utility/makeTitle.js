function makeFullMenuPart(fullMenuSeed) {
  switch (fullMenuSeed) {
    case 'allInjury':
      return 'Subject & Officer Injuries'

    case 'subjectInjury':
      return 'Subject Injuries'

    case 'officerInjury':
      return 'Officer Injuries'

    case 'incidentsForceType':
      return 'Incidents of Force by Type'

    case 'incidentsBasisEncounter':
      return 'Incident Basis for Encounter'

    default:
      return ''
  }
}

function makeTimeMenuParts(timeMenuSeed) {
  let brokenTime = timeMenuSeed.split('/')
  if (brokenTime[0] === 'allYear') brokenTime[0] = 'All Years'
  if (brokenTime[1] === 'allQuarter') {
    brokenTime[1] = 'All Quarters'
  } else {
    brokenTime[1] = 'Q' + brokenTime[1]
  }
  return brokenTime
}

function makeDutyPart(dutyMenuSeed) {
  switch (dutyMenuSeed) {
    case 'on':
      return 'On Duty'
    case 'off':
      return 'Off Duty'
    case 'allDuty':
      return 'On and Off Duty'
    default:
      return ''
  }
}

function makeCommandPart(commandPartSeed) {
  if (commandPartSeed === 'allCommand') return 'All Commands'
  return commandPartSeed.replace('%20', ' ')
}

function makeTitle(currentSelections) {
  let titlePart = []
  //make menu selection string
  titlePart.push(makeFullMenuPart(currentSelections.fullMenuSelection))
  //build time part
  let timeArray = makeTimeMenuParts(currentSelections.timeSelection)
  titlePart.push(timeArray[0], timeArray[1])
  //if IBE, cut title short
  if (titlePart[0] === 'Incident Basis for Encounter')
    return titlePart.join(', ')
  //build duty part
  titlePart.push(makeDutyPart(currentSelections.dutySelection))
  //build command part
  titlePart.push(makeCommandPart(currentSelections.commandSelection))
  return titlePart.join(', ')
}

module.exports = {makeTitle}
