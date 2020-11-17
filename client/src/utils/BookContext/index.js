import React from "react";

const BookContext = React.createContext({
  title: "",
  authors: "",
  description: "",
  image: "",
  link: "",

});

export default BookContext;
