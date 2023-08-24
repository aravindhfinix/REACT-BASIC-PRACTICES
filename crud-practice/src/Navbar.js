import React from 'react'
import './Navbar.css'

function navbar({ apicall, setApi }) {

  return (
    <nav className='Navbar'>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-evenly" }}>
        <li onClick={() => { setApi('users') }}>users</li>
        <li onClick={() => { setApi('posts') }}>post</li>
        <li onClick={() => { setApi('comments')}}>comments</li>
      </ul>
    </nav>
  )
}

export default navbar