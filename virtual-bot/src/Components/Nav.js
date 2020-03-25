import React from "react"
import {Link} from 'react-router-dom';

function Nav(){
  return(
    <div className="m-2">
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top fadeIn" style={{backgroundColor: "#000"}}>
          <Link to="/" style={{textDecoration: "none"}}>
            <img src="https://i.pinimg.com/originals/ba/92/fe/ba92fe11861df19e26a8be133acc5e10.png"
                style={{width:"30px", height:"30px", transform: "rotate(.6turn)", filter: "hue-rotate(50deg"}}
                className="d-inline-block align-top mr-2" alt="err"
              />
          <h style={{letterSpacing: "2px", color: "white", fontWeight: "light"}}>Help Bot</h>
          </Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <Link to="/HowItWorks" style={{textDecoration: "none"}}>
                <li style={{color: "white", padding: "10px"}}>
                  How It Works
                </li>
              </Link>
              <Link to="/WhatYouGet" style={{textDecoration: "none"}}>
                <li style={{color: "white", padding: "10px"}}>
                  What you get
                </li>
              </Link>
              <Link to="/About" style={{textDecoration: "none"}}>
                <li style={{color: "white", padding: "10px"}}>
                  About us
                </li>
              </Link>
              <Link to="/SignIn" style={{textDecoration: "none"}}>
                <li style={{color: "white", padding: "10px"}}>
                  Sign In
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
