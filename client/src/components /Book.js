import React, { useContext } from "react";
import Bookcards from '../components /Bookcards'
import BookCardContext from '../utils/BookContext';

function BookInfo() {
  const { title, authors, description, image, link } = useContext(BookCardContext);

  return (
    <ul class="list-group list-group-flush">
    <li class="list-group-item">{title, authors, description, image, link}</li>
    <li class="list-group-item"><Bookcards /></li>
    <li class="list-group-item"><Bookcards /></li>
    <li class="list-group-item"><Bookcards /></li>  
  </ul>

  );
}

export default BookInfo;