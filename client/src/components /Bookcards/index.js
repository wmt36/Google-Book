import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SaveBtn from '../SaveBtn'

function Bookcard({ view }) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    API.getBooks()
    .then((res) => {
      console.log("response from db: ", res.data.items);
      setBook(res.data.items)});
    }, []);
  
  function saveBook(save) {
    if(save === 'save'){
   console.log('saved')
  }
}

  return (

    <div>
      { book.length ? (<div>
        {book.map((books) => (
        <div className="card-body" key={books.id}>    
          <img src={books.volumeInfo.imageLinks}></img>
            <h3>{books.volumeInfo.title}</h3>
            <h3>{books.volumeInfo.authors}</h3>
            <a>{books.searchInfo.textSnippet}</a>
            <a>{books.accessInfo.country}</a>
            <SaveBtn saveBook={saveBook} />
            <button
              onClick={() => view("view")}
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
