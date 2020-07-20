const router = require('express').Router()
const Sequelize = require('sequelize')
module.exports = router

const checkIfAdmin = (req, res, next) => {
  if (req.user === undefined || !req.user.isAdmin) {
    const error = new Error('illegal action')
    error.status = 401
    return next(error)
  }
  next()
}

router.post('/upload', checkIfAdmin, async (req, res, next) => {
  try {
    const allProducts = {happy: 'thing'}
    res.json(allProducts)
  } catch (error) {
    next(error)
  }
})
