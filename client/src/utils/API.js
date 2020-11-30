import axios from 'axios';

//bringing API routes from the back end routes
const BooksApi = {

  //API call for google books
  getBooks: function() {
  return axios.get('/api/books/');
},//save the book to the database
saveBook: function(books) {
  return axios.post('/api/books/', books)
},//saved Data base of books
getBook: function(id) {
  return axios.get('/api/books/saved/')
},//delete book from database
deleteBook: function (_id) {
  return axios.delete('/api/books/saved/' + _id)
}



};

export default BooksApi; 