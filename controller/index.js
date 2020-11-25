const db = require = require('../models')
const api_url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes/'

module.exports = {
   findAll: function(req, res) {
       db.Book('Book')
       .find({})
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err))
   }, 
   findById: function(req, res) {
       db.Book('Book')
       .findById(req.params.id)
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err))
   }, 
  insert: function (req, res) {
       db.Book('Book')
       .insertOne(req.body)
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err));
   },
   remove: function(req, res) {
       db.Book('Book')
       .findById({ id: req.params.id })
       .then(books => books.remove())
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err))
   }
};