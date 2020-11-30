import React from 'react'
import {Link} from 'react-router-dom'
import Jumbotron from '../components /Jumbotron'
import SavedCards from '../components /SavedCards'



const Saved = () => {

  return (
      <div>
      
        <Jumbotron />
        <SavedCards />
        <Link to={'/'}>
             <button
               className="btn btn-danger mx-4"
             >
              Search for more books!
             </button>            
        </Link>
        
   
      </div>
  
  );
}

export default Saved;