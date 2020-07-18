function totalIncidentsBasisEncounter(data, type) {
  return data.reduce((acc, item) => {
    let temp = 0
    if (item.encounterCategory.type === type) {
      if (item.count !== undefined) temp = item.count + temp
    }
    return acc + temp
  }, 0)
}

module.exports = {totalIncidentsBasisEncounter}
