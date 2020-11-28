import './style.css'



function Jumbotron() {
  return (
    <div className="jumbotron">
    <h1 className="display-4">Google Book Display!</h1>
    <p className="lead">Scroll and search for popular books with the help of the Google book databse!</p>
    <hr></hr>
    <a className="btn btn-primary btn-lg" href="/" role="button">Search</a>
    %10
    <a className="btn btn-primary btn-lg" href="/saved" role="button">Saved Books</a>
  </div>
  
  );
}

export default Jumbotron;
