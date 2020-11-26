import React from "react";

export default function index(props) {
  return (
    <div>
      <button
        
        {...props}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-primary mx-4"
      >
        {props.children}Save Book!
      </button>
    </div>
  );
}

// <button
// onClick={() => save("save")}
// className="btn btn-primary mx-4"
// >
// Save Book!
// </button>
