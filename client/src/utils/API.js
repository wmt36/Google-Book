import axios from 'axios';


const BooksApi = {
  getBooks: function() {
  return axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
},
saveBook: function(bookData) {
  return axios.post('https://www.googleapis.com/books/v1/volumes?q=search+terms', bookData)
}


};

export default BooksApi; 