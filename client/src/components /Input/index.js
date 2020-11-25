import React, { useState, useEffect } from 'react'
import API from '../../utils/API'




function Input() {


  
  return (
    <div className="input-group mb-3">,
    <input type="text" className="form-control" placeholder="Search for Book" aria-label="Search for Book" aria-describedby="button-addon2"></input>
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
  

  </div>
  
  
  );
}

export default Input;