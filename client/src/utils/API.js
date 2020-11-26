import axios from 'axios';


const BooksApi = {
  getBooks: function() {
  return axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyD7eNP7bXaGKKyBBlPIiWf5WJoOkaYQ450');
},


};

export default BooksApi;