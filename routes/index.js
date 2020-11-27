const router = require('express').Router();
const mongojs = require('mongojs')
const fetch = require('node-fetch')
const db = require('../models');
const { insert } = require('../controller');
const { Book } = require('../models');


//API call from google to get access all 900+ books from them 
router.get('/api/books', async ({body}, res) => {
    const api_url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
    const response = await fetch(api_url)
    const data = await response.json()
    res.json(data)

    // Book.find({})
    // .then(books => res.json(books))
    // .catch(err => res.status(422).json(err))

})


// allow you to add a book from the API call to the database
router.post('/api/books', ({body}, res) => {
Book.insertMany(body)
.then(books => {res.json(books)})
.catch(err => {res.status(400).json(err)});
console.log(Book)
}) 


//allow you to find the exact books saved to the database
router.get('/api/books/saved', ({body}, res) => {
    Book.find({}, (err, data) => {
        if(err){
            res.send(err)
        } else{
            res.json(data)
        }
    })
    
})

module.exports = router 