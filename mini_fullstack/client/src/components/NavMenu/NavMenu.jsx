import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/auth">Auth</Link></li>
        </ul>
        
    </nav>
  )
}

export default NavMenu