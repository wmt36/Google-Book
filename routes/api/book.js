const router = require('express').Router();
const bookController = require('../../controller')

router.route('/')
.get(bookController.findAll)
.post(bookController.insert)

router.route('/:id')
.get(bookController.findById)
.delete(bookController.remove)

module.exports = router