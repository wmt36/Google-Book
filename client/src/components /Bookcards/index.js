import React from 'react'
import API from '../../utils/API'



function Bookcard({save, view }) {


  return (
    <div className="card">
  <img src="">{}</img>
  <div className="card-body">
  <h3>{}</h3>
  <h3>{}</h3>
  <p>{}</p>
  <button onClick={() => save("save")} className="btn btn-primary mx-4">
        Save Book!
      </button>
      <button onClick={() => view("view")} className="btn btn-success mx-4">
        View Book!
      </button>
  </div>
</div>
  );
}

export default Bookcard;