const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: {type: String, required: false}, 
    title: {type: String, required: true},
    authors:  {type: String, required: true},
    description: {type: String, required: false},
    link: {type: String}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book 