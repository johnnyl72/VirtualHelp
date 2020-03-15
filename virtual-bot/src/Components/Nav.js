import React from "react"

function Nav(){
  return(
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: "#008B8B"}}>
          <a className="navbar-brand" href="#">HelpBot</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
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
