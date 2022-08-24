import React from 'react'
import './Header.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Header (){
    return (
    <hea className="Header">
      <Link to="/" className="site-title">
        DEV@Deakin </Link>
      <div class="search-container" >
        <input class="input"  type="text"></input>
        <button onClick="window.open('www.google.com')">Search</button>
      </div>
      <ul>
        <CustomLink to="/post">Post</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </hea>
  )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
  