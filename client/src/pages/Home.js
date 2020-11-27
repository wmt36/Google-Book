import Input from '../components /Input'
import Jumbotron from '../components /Jumbotron'
import Bookcard from '../components /Bookcards'
import './style.css'


const Home = () => {
  return (
      <div>
     <Jumbotron />
      <Input></Input>
      <Bookcard/>
   
      </div>
  
  );
}

export default Home;
