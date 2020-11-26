const router = require('express').Router();
const bookController = require('../controller')
const fetch = require('node-fetch')


router.get('/api/books', async ({body}, res) => {
    const api_url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
    const response = await fetch(api_url)
    const data = await response.json()
    res.json(data)
})

router.post('/api/books', ({body}, res) => {
    console.log(body)
    res.json('yessi')
})

// router.delete('/api/books/:id', ({body}, res) => {
//     console.log('data deleted')
//     res.json(body)
// })

module.exports = router 