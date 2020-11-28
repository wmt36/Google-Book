import React, { useState, useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'
import Jumbotron from '../components /Jumbotron'
import SavedCards from '../components /SavedCards'
import API from '../utils/API'


const Saved = () => {

  return (
      <div>
      
        <Jumbotron />
        <SavedCards />
        
   
      </div>
  
  );
}

export default Saved;