const router = require('express').Router()
const {TimeFrame, Command} = require('../db/models')
module.exports = router

router.get('/timeFrames', async function (req, res, next) {
  console.log('/timeframes')
  try {
    let times = await TimeFrame.findAll({
      attributes: ['year', 'quarter'],
    }).map((item) => ({
      key: `year:${item.year}/quarter:${item.quarter}`,
      text: `${item.year} Quarter ${item.quarter}`,
      value: `${item.year}/${item.quarter}`,
    }))

    res.json([
      {
        key: 'allYear/allQuarter',
        text: 'All Time',
        value: 'allYear/allQuarter',
      },
      ...times,
    ])
  } catch (error) {
    next(error)
  }
})

router.get('/commands', async function (req, res, next) {
  try {
    let commands = await Command.findAll({
      attributes: ['commandName'],
    }).map((item) => ({
      key: item.commandName,
      text: item.commandName,
      value: encodeURIComponent(item.commandName.trim()),
    }))

    res.json([
      {
        key: 'allCommand',
        text: 'All Commands',
        value: 'allCommand',
      },
      ...commands,
    ])
  } catch (error) {
    next(error)
  }
})
