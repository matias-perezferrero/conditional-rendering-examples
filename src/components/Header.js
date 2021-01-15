import React from 'react'

export default function Header(props) {
    return (
        <div>
            <span>Header</span>
            <button onClick={() => props.setComponentToDisplay("posts")}>Show Posts</button>
            <button onClick={() => props.setComponentToDisplay("about")}>Show About</button>
        </div>
    )
}
