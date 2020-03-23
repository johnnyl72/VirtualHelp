import React from "react"
import '../signin.css';

function SignIn(){
  return(
    <div className="pt-5 pt-5">
      <div className="container signHtml signBody pt-5">
        <form className="form-signin">
          <img className="mb-4" id="centerlog"  src="https://i.pinimg.com/originals/ba/92/fe/ba92fe11861df19e26a8be133acc5e10.png" alt="" style={{width:"72px", height:"72px", transform: "rotate(.6turn)", filter: "hue-rotate(50deg"}}/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in.</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block btn btn-outline-light" type="submit" style={{backgroundColor:"#32a5ff"}}>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
