import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SaveBtn from '../SaveBtn'
import { Link } from "react-router-dom";


function Bookcard({ view }) {

  //setting out components state
  const [book, setBook] = useState([]);
  const [saved, setSaved] = useState({})


  //used to set the data from my axios call to my setBook state so i have access to it
  useEffect(() => {
    API.getBooks()
    .then((res) => {
      console.log("response from db: ", res.data.items);
      setBook(res.data.items)});
    }, []);
  


    //allowing you tosave the book to the database
  function saveBook(books) {
    
    API.saveBook({ books })
    .then((res) => {
      console.log("saved book to data base ", res.data);
      setSaved(res.data)})
    .catch(err => console.log(err)
    )}console.log()



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


//linking access to the books to the book link
function viewBook( books) {
  
  if(books.volumeInfo){
    return window.location.assign(books.volumeInfo.previewLink)
  }else{
    return 'No link for book!'
  }

}

  return (

    <div>
      { book.length ? (<div>
        {book.map((books) => (
          
        <div className="card-body" key={books.id}> 
          <img src={imageLinks(books)} alt={'Thumbnail of Book Cover'}></img>
            <h2>{books.volumeInfo.title}</h2>
            <h4>{books.volumeInfo.authors}</h4>
            <h6>{textSnippet(books)}</h6>
            <h6>{books.accessInfo.country}</h6>
      
            <SaveBtn onClick={() => saveBook(books)} />
           
            <button
              onClick={() => viewBook(books)}
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
