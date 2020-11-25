import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'

export default function index() {
    const {title, authors, description, image, link} = useContext(BookContext);

    return (
        <div>
            
        </div>
    )
}
