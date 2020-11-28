import React, { useState, useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'
import API from '../../utils/API'


const SavedCards = () => {

  const [book, setBook] = useState([])

 //used to get the books that we saved to the databse from saveBook function
  useEffect((e) => {
    API.getBook()
    .then((res) => {
      console.log("response from db: ", res.data);
      setBook(res.data)})
    .catch(err => console.log(err));
  }, [])


  return (
      <div>
        { book.length ? (<div>
          {book.map((books) => {
           <div className="card-body" key={books.id}> 
           {/* <img src={} alt={'Thumbnail of Book Cover'}></img> */}
             <h2>{books.title}</h2>
             <h4>{books.authors}</h4>
             <h6>{books.description}</h6>
             <h6>{}</h6>
             <Link to={'/'}>
             <button
               className="btn btn-danger mx-4"
             >
              Search for more books!
             </button>            
             </Link>
         </div>
        })}
        </div>) : ( <div> <h1>No Books Saved!</h1>
          <Link to={'/'}>
             <button
               className="btn btn-danger mx-4"
             >
              Search for more books!
             </button>            
             </Link>        
        </div>
         )}
   
        
       
       
   
      </div>
  
  );
}

export default SavedCards;