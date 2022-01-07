import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
              <nav className="navbar navbar-light navbar-expand-md py-3">
                <div className="container">
                  <div className="logo">
                      <NavLink to="/" className="navbar-brand text-uppercase fw-bold">WebLesson</NavLink>
                  </div>
                  <button className="navbar-toggler outline-0" data-bs-target="#navbar" data-bs-toggle="collapse"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbar">
                      <ul className="navbar-nav navbar-links">
                          <li className="nav-item"><NavLink exact activeClassName="menu-active"  to="/">Home</NavLink></li>
                          <li className="nav-item"><NavLink exact activeClassName="menu-active"  to="/services">Services</NavLink></li>
                          <li className="nav-item"><NavLink activeClassName="menu-active"  to="/about">About</NavLink></li>
                          <li className="nav-item"><NavLink activeClassName="menu-active" to="/contact">Contact</NavLink></li>
                      </ul>
                  </div>
               </div>
            </nav>
        </div>
    )
}
