import React from "react"

function WelcomeBack(){
    return(
      <div className="centerHeader mt-2" style={{paddingTop: "15rem"}}>
        <h1>Welcome</h1>
        <p>Begin your conversation or resume to where you start</p>
        <p>
          <a href="/ChatSpace" class="btn btn-lg btn-secondary">Start</a>
        </p>
      </div>
    )
}

export default WelcomeBack
