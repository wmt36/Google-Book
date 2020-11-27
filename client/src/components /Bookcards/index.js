import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SaveBtn from '../SaveBtn'


function Bookcard({ view }) {

  //setting out components state
  const [book, setBook] = useState([]);


  //used to set the data from my axios call to my setBook state so i have access to it
  useEffect(() => {
    API.getBooks()
    .then((res) => {
      console.log("response from db: ", res.data.items);
      setBook(res.data.items)});
    }, []);
  
    //allowing you tosave the book to the database
  function saveBook(e) {
    e.preventDefault();
    // API.saveBook()
    console.log('book coming soon')
}


//using this function to put in place to view the link to the book if it exsist
function viewBook( books) {
  
  if(books.volumeInfo){
    return books.volumeInfo.previewLink
  }else{
    return 'No link for book!'
  }

}


//adding a dicription of the book if there is one to add
function textSnippet(books){
  if(books.searchInfo){
  return books.searchInfo.textSnippet
  } else {
    return 'No description for this book in this API'
  }
}

//adding images if it is there is an image to add from the api
function imageLinks(books){
  
if(books.volumeInfo.imageLinks){
  return books.volumeInfo.imageLinks.thumbnail
} else if (books.volumeInfo.imageLinks) {
  return books.volumeInfo.imageLinks.smallThumbnail
} else{
  return 'No Image'
}

}

  return (

    <div>
      { book.length ? (<div>
        {book.map((books) => (
          
        <div className="card-body" key={books.id}> 
          <img src={imageLinks(books) } alt={'Thumbnail of Book Cover'}></img>
            <h2>{books.volumeInfo.title}</h2>
            <h4>{books.volumeInfo.authors}</h4>
            <h6>{textSnippet(books)}</h6>
            <h6>{books.accessInfo.country}</h6>
            <SaveBtn onClick={saveBook} />
            <button
              onClick={() => viewBook}
              className="btn btn-success mx-4"
            >
              View Book!
            </button>

        </div>
      ))}
      </div>) : (<div></div>) }
    
    </div>
  );
}

export default Bookcard;
