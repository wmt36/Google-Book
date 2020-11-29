import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import API from '../../utils/API'
import DeleteBtn from '../DeleteBtn'


const SavedCards = () => {

  const [book, setBook] = useState([])


 function loadBooks(){
    API.getBook()
    .then((res) => {
      console.log("response from db: ", res.data);
      setBook(res.data)})
    .catch(err => console.log(err));
    
 }

 //used to get the books that we saved to the databse from saveBook function
  useEffect(() => {
   loadBooks()
  }, [])

  function deleteBook(books) {
      API.deleteBook(books)
      .then(res => loadBooks()) 
      .catch(err => console.log(err))
  }


  return (
      <div>
          
        { book.length ? (<div>
          {book.map((books) => (
           
           <div className="card-body" key={books._id}> 
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
             <DeleteBtn onClick={() => deleteBook(books)}/>    
         </div>
          ))}
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