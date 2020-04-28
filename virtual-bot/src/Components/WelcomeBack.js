import React from "react"
import {Link} from 'react-router-dom';

function WelcomeBack(){
    return(
      <div className="centerHeader mt-5">
        <h1>Welcome</h1>
        <p>Begin your conversation or resume to where you start</p>

        <Link to="/ChatSpace" style={{textDecoration: "none"}}>
          <p>
            <a href="/ChatSpace" class="btn btn-lg btn-secondary">Start</a>
          </p>
        </Link>
      </div>
    )
}

export default WelcomeBack
