  import React, {Component} from "react"
  import {Link} from 'react-router-dom';
  import fire from '../config/Fire';
  class Nav extends Component{
    constructor() {
      super();
      this.state = ({
        user: null,
      });
      this.authListener = this.authListener.bind(this);
      this.logout = this.logout.bind(this);
    }

    logout() {
      fire.auth().signOut();
    }

    componentDidMount(){
      this.authListener();
    }

    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          this.setState({ user });
          // localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          // localStorage.removeItem('user');
        }
      });
    };

    render(){
      return(
          <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-ofnav">

              <a class="navbar-brand" href="#">
                <Link to="/">
                <img src="https://i.pinimg.com/originals/ba/92/fe/ba92fe11861df19e26a8be133acc5e10.png"
                style={{width:"30px", height:"30px", transform: "rotate(.6turn)", filter: "hue-rotate(50deg"}}
                className="d-inline-block align-top mr-2" alt="err"/>
                <h style={{letterSpacing: "1px", color: "white", fontWeight: "light"}}>Help Bot</h>
                </Link>
              </a>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ml-auto">
                  <Link to="/HowItWorks" style={{textDecoration: "none"}}>
                    <li class="nav-item" style={{color: "white", padding: "10px"}}>
                      How It Works
                    </li>
                  </Link>

                  <Link to="/WhatYouGet" style={{textDecoration: "none"}}>
                     <li class="nav-item" style={{color: "white", padding: "10px"}}>
                       What you get
                     </li>
                   </Link>

                   <Link to="/About" style={{textDecoration: "none"}}>
                     <li class="nav-item" style={{color: "white", padding: "10px"}}>
                       About us
                     </li>
                   </Link>

                   {this.state.user ? <div>
                     <Link to="/" style={{textDecoration: "none"}}>
                        <li class="nav-item" style={{color: "white", padding: "10px"}} onClick={this.logout}>
                          Sign Out
                        </li>
                     </Link>
                   </div>
                    : <Link to="/SignIn" style={{textDecoration: "none"}}>
                      <li class="nav-item" style={{color: "white", padding: "10px"}}>
                        Sign In
                      </li>
                   </Link>}

                   {this.state.user ? (
                     <Link to="/ChatSpace" style={{textDecoration: "none"}}>
                          <li class="nav-item" style={{color: "white", padding: "10px"}}>
                            Chat Now
                          </li>
                    </Link>)
                    :
                    <div></div>
                  }

                </ul>
              </div>
            </nav>
          </div>
          )
    }
}

export default Nav
