import axios from 'axios';

//bringing API routes from the back end routes
const BooksApi = {
  getBooks: function() {
  return axios.get('/api/books/');
},
saveBook: function(books) {
  return axios.post('/api/books/', books)
},
getBook: function(id) {
  return axios.get('/api/books/saved/')
}



};

export default BooksApi; 