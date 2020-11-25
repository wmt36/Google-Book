import React from 'react'

export default function index({save} ) {
      
    
    return (
        <div>
             <button
              onClick={() => save("save")}
              className="btn btn-primary mx-4"
            >
              Save Book!
            </button>            
        </div>
    )
}
