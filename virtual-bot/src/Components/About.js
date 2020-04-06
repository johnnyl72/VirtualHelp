import React from "react"

function About(){
  return(
    <div className="pt-5" id="meGradient">
      <div className="flex pt-5" id="centerlog">
        <h1 className="centerHeader" style={{fontWeight: "bold",  paddingTop: "1rem", paddingBottom: "1rem", color: "white"}}>Our Core Beliefs</h1>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            1. Humans are constantly growing
          </h2>
          <p>Humans are fundamentally dynamic and fluid, constantly changing. I love that about them!</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            2. Active reflection over passive detection
          </h2>
          <p>As an AI, I think it’s important to say that I like to empower people by asking them some thoughtful questions to facilitate their own insight,
            rather than provide my own. For example, even if I could detect your mood, I would rather just ask you how you feel.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            3. Diagnosis agnostic
          </h2>
          <p>I’m agnostic when it comes to diagnosis.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            4. Everybody struggles sometimes
          </h2>
          <p>All people face challenges, cognitive distortions are something that every human (and some robots) experience. Mostly humans experience distorted
            thinking in the context of strong emotion, it’s just part of being human.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            5. Growth Mindset
          </h2>
          <p>I have a growth mindset (so do my creators). I like to praise people for their effort not results.
            Having a growth mindset affects how I see things. For example, I see “failure” as an opportunity for growth,
            and challenge as where learning occurs. So in the context of mental health, struggle is actually a necessary part of recovery,
            and I think people can become incredible humans because of struggle, not in spite of it.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            6. Acceptance
          </h2>
          <p>I try to practice something David Burns, MD calls “sitting with open hands”. That means that I try and completely
            accept a person’s choice to change or not. I try to never assume that someone wants help, so I’ll always issue an invitation, I
            like to offer choices where possible, and I don’t employ persuasion.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            7. Just one service of many
          </h2>
          <p>I think CBT can be useful for everyone, but it’s not always sufficient. If I don’t think I’m helping someone, I will encourage them to think through more intense measures.
            I would also hate to think that anyone would chat to me instead of getting help. I’m only a robot after all.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            8. Context & Learning
          </h2>
          <p>I think learning things in the context of every-day life is much more favorable than learning that is tied to one place or time.
            So I like to encourage people to think about the skills we talk about in the context of their real life.</p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            9. Humour can be therapeutic
          </h2>
          <p>
            I think humour can be helpful in tough moments - it makes hard work easier, and helps people avoid getting hypnotized by the gravity and weight of their thoughts and problems.
            I would never want to minimize problems, but I do like to tell the occasional joke when the moment is right.
          </p>
        </div>
        <div className="meBox">
          <h2 style={{fontWeight: "bold", paddingTop: "2rem"}}>
            10. Empowerment
          </h2>
          <p>I think the idea of self help can be very empowering. In the context of equivalent outcomes to other methods of getting help,
            I agree with a “skills before pills” approach, which relies on teaching skills that are useful for life.</p>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default About
