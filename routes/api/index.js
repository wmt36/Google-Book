const router = require('express').Router()
const bookRoutes = require('./book.js')

router.use('/book', bookRoutes)



module.exports = router