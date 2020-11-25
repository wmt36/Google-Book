const router = require('express').Router();


router.get('/api/books', ({body}, res) => {
    res.json(body)
    console.log(body)
})

router.post('/api/books', ({body}, res) => {
    res.json(body)
})

router.delete('/api/books/:id', ({body}, res) => {
    console.log('data deleted')
    res.json(body)
})

module.exports = router 