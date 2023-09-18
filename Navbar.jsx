/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { PropTypes } from 'prop-types'
import logo from './imgs/logo.png'



export default function Navbar() {
    return(
        <><nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        
          <a className="navbar-brand" href="/"><img src={logo} alt="" height={45} width={50}/>
            <b>Liner</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Templates</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Community</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Layout</a></li>
                  <li><a className="dropdown-item" href="/">Animation presets</a></li>
                  <li><a className="dropdown-item" href="/">Effect</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link pricing" href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-success" type="submit">login</button>
        </div>
        <br></br>
      </nav></>



    )
}
Navbar.propTypes = {title:PropTypes.string,
                     aboutText: PropTypes.string}
