import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/Eventhandling">
              Eventhandling
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar