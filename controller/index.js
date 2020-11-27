const db = require = require('../models')
const api_url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'

module.exports = {
   findAll: function(req, res) {
       db.Book
       .find(req.param)
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err))
   }, 
   findById: function(req, res) {  
       db.Book
       .findById(req.params.id)
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err))
   }, 
  insertMany: function ({body}, res) {
       db.Book
       .insertMany(body)
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err));
   },
   remove: function(req, res) {
       db.Book
       .findById({ id: req.params.id })
       .then(books => books.remove())
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err))
   }
};