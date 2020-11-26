import axios from 'axios';


const BooksApi = {
  getBooks: function() {
  return axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes/');
},
saveBook: function(bookData) {
  return axios.post('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes/', bookData)
}


};

export default BooksApi; 