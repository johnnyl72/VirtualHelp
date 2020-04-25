import React from "react"

function WelcomeBack(){
    return(
      <div className="centerHeader mt-5">
        <h1>Welcome</h1>
        <p>Begin your conversation or resume to where you start</p>
        <p>
          <a href="/ChatSpace" class="btn btn-lg btn-secondary">Start</a>
        </p>
      </div>
    )
}

export default WelcomeBack
