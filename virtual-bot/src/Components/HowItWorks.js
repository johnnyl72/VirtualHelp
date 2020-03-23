import React from "react"

function HowItWorks(){
  return(
    <div className="py-5 container">
      <h1 className= "center" style={{paddingTop: "10%", paddingBottom: "10%"}}>The science behind Helpt Bot</h1>
      <div className= "py-5 flex-about">
        <div className="col-6">
          <h1>Who do you think you are?</h1>
        </div>
        <div className="col-6">
          <span>We are psychologists who built programs and tools in the clinic. We worked at Stanford for over 10 years.
            We love helping people & behavioral science (so much so we’ve been doing it for 20 years).</span>
        </div>
      </div>
      <div className= "pt-5 flex-about">
        <div className="col-6">
          <h1>So why leave the clinic?</h1>
        </div>
        <div className="col-6">
          <span>Because the sad truth is that more than half of the world’s population still doesn’t have access to basic health care.
            For many more, mental health care is not an option.So we asked ourselves, “what tools can we use to help?”</span>
        </div>
      </div>
      <div className= "pt-5 flex-about">
        <div className="col-6">
          <h1>Don’t you need a therapist?</h1>
        </div>
        <div className="col-6">
          <span>Not always. There’s 20+ years of rigorous research to show that DIY CBT works. CBT delivered via the Internet (and even video games!)
             can be as effective as therapist-delivered CBT for both anxiety and depression.Most studies show that people do better with some coaching.
             Coaching is not the same as therapy: coaches redirect to relevant material but people still need to do the work themselves.</span>
        </div>
      </div>
      <div className= "pt-5 flex-about">
        <div className="col-6">
          <h1>So what did you do?</h1>
        </div>
        <div className="col-6">
          <span>
            We brought in storytellers, data scientists, engineers, and designers to combine their love of writing stories, AI, and robots with the
            intention of creating a companion (Woebot!) who can help people with their mental health.But before launching Woebot publicly, we wanted
             to make sure he could truly help people so we did a randomized controlled trial…</span>
        </div>
      </div>
      <div>
        <footer className="container">
          <hr className="featurette-divider" />
          <p className="float-right"><a href="#">Back to top</a></p>
          <p>© 2017-2019 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </footer>
      </div>
    </div>
  )
}

export default HowItWorks
