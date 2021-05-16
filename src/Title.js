// src/Title.js
import './Title.css';
import React from 'react';
import { NavLink } from 'react-router-dom'

function Title() {
  return (

  <div className="Title">
    <header>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>

      <h1>SFFoodies</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>

      <div>

      <NavLink
      className="nav-link"
      activeClassName="nav-link-active"
      exact
      to="/">List</NavLink>

      <NavLink
      className="nav-link"
      activeClassName="nav-link-active"
      to="/Community">Community</NavLink>

      <NavLink
      className="nav-link"
      activeClassName="nav-link-active"
      to="/about">About</NavLink>


      </div>



      </header>
    </div>
  )
}

export default Title
