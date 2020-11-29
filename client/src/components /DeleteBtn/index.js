import React from 'react'

export default function DeleteBtn(props) {
    return (
        <div>
            <span className="bi bi-trash-fill" {...props} role="button" tabIndex="0">
      ✗
    </span>
        </div>
    )
}
