import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
       <div className="box">
        <ul>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/Blog/">Blog</Link>
            </li>
        </ul>
       </div>
    </>
  )
}

export default Header