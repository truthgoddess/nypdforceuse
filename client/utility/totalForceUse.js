function totalForceUse(data, type) {
  return data.reduce((acc, item) => {
    let temp = 0
    if (item.forceCategory.type === type) {
      if (item.onDuty !== undefined) temp = item.onDuty + temp
      if (item.offDuty !== undefined) temp = item.offDuty + temp
    }
    return acc + temp
  }, 0)
}

module.exports = {totalForceUse}
