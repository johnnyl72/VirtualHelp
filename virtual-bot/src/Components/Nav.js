import React from "react"

function Nav(){
  return(
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: "#008B8B"}}>
          <a className="navbar-brand" href="#">
            <img src="https://i.pinimg.com/originals/ba/92/fe/ba92fe11861df19e26a8be133acc5e10.png"
                style={{width:"30px", height:"30px", transform: "rotate(.6turn)", filter: "hue-rotate(220deg"}}
                className="d-inline-block align-top mr-2" alt="err"
              />
            <h style={{letterSpacing: "2px", color: "white", fontWeight: "light"}}>Help Bot</h>
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{color: "white"}}>How it works <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{color: "white"}}>What you get</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{color: "white"}}>About us</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{color: "white"}}>Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
