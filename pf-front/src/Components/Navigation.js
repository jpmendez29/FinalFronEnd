import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">

          <div className="container ">
            <Link className="navbar-brand " to="/"> Pf</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

              <div className="navbar-nav ms-auto text-center ">
                <Link className="nav-link" to="/home"> Home</Link>
                <Link className="nav-link" to="/"> Login</Link>
                <Link className="nav-link" to="/singup"> Singup</Link>
              </div>

            </div>

        </div>
        
      </nav>

    )
  }
}

