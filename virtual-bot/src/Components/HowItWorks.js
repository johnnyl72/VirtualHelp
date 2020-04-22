import React from "react"

function HowItWorks(){
  return(

    <div className="py-5 container">
      <h1 className= "centerHeader" style={{paddingTop: "10%", paddingBottom: "10%"}}>The science behind Help Bot</h1>

      <div className="row pb-5 m-2">
        <h1 className="col-lg-6 center">
          Who do you think you are?
        </h1>
        <span className="float-right col-lg-6">We are psychologists who built programs and tools in the clinic. We worked at Stanford for over 10 years.
          We love helping people & behavioral science (so much so we’ve been doing it for 20 years).</span>
      </div>

      <div className="row pb-5 m-2">
        <h1 className="col-lg-6 center">
          So why leave the clinic?
        </h1>
        <span className="float-right col-lg-6">Because the sad truth is that more than half of the world’s population still doesn’t have access to basic health care.
          For many more, mental health care is not an option.So we asked ourselves, “what tools can we use to help?”</span>
      </div>

      <div className="row pb-5 m-2">
        <h1 className="col-lg-6 center">
          Don’t you need a therapist?
        </h1>
        <span className="float-right col-lg-6">Not always. There’s 20+ years of rigorous research to show that DIY CBT works. CBT delivered via the Internet (and even video games!)
           can be as effective as therapist-delivered CBT for both anxiety and depression.Most studies show that people do better with some coaching.
           Coaching is not the same as therapy: coaches redirect to relevant material but people still need to do the work themselves.</span>
      </div>
    </div>



  )
}

export default HowItWorks
