
import Jumbotron from '../components /Jumbotron'
import Results from '../components /Results'
import BookContext from '../utils/BookContext'
import Book from '../components /Book'


const Saved = () => {
  return (
      <div>
        <BookContext.Provider>
        <Jumbotron />
          <Results />
       </BookContext.Provider>
 
   
      </div>
  
  );
}

export default Saved;