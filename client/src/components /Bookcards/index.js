import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SaveBtn from '../SaveBtn'

function Bookcard({ view }) {
  const [book, setBook] = useState({
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
  });

  useEffect(() => {
    API.getBooks()
      .then((res) => setBook(res.data.items))
      .catch((err) => console.log(err));
  }, []);
  
  function saveBook(save) {
    if(save === 'save'){
   console.log(`${book.timessaved++}`)
  }
}

  return (

    <div>
      { book.length ? (<div>
        {book.map((books) => (
        <div className="card" key={books.id}>
          {/* <img src="">{books.volumeInfo.imageLinks.thumbnail}</img> */}
          <div className="card-body">
            <h3>{books.volumeInfo.title}</h3>
            <h3>{books.volumeInfo.authors[0]}</h3>
            <p>{books.volumeInfo.searchInfo}</p>
            <a>{books.accessInfo.webReaderLink}</a>
            <SaveBtn saveBook={saveBook} />
            <button
              onClick={() => view("view")}
              className="btn btn-success mx-4"
            >
              View Book!
            </button>
          </div>
        </div>
      ))}
      </div>) : (<div></div>) }
    
    </div>
  );
}

export default Bookcard;
