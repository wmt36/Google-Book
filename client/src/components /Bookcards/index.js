import React from 'react'
import API from '../../utils/API'



function Bookcard() {


  return (
    <div className="card">
  <img src="">{}</img>
  <div className="card-body">
  <h3>{}</h3>
  <h3>{}</h3>
  <p>{}</p>
    <a href="#" className="btn btn-primary">Save Book!</a>
    <a href="#" className="btn btn-success">View Book!</a>
  </div>
</div>
  );
}

export default Bookcard;