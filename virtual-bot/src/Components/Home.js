import React, {Component} from "react"
import '../product.css';
import '../animate.css';
import {Link} from 'react-router-dom';
class Home extends Component{
  render(){
    return(
      <div>
        <div style={{backgroundImage: "url(https://wallpaperplay.com/walls/full/8/4/2/86369.jpg)", filter: "contrast(200%)"}}>
        <div style={{paddingTop: "4%", paddingBottom: "10%"}}>
          <div className="row center">
            <div className="col-lg-3 fadeIn img-fluid mb-3 d-none d-lg-block">
              <img src="https://cdn.clipart.email/1468a43d9aab498728e693cefdc57f7f_28-collection-of-robot-clipart-transparent-high-quality-free-_2220-2000.png"  style={{width: "330px", position: "relative", right: "10rem",filter: "hue-rotate(333deg)"}}/>
            </div>
            <div className="col-lg-6 fadeIn">
              <h1 class="heading" style={{color:"#F0F8FF",}}>Introducing Help Bot</h1>
              <br/>
              <p class="subheading" style={{color:"white"}}>Sometimes we get all tangled up inside our heads, unable to move on. Help Bot is great at helping you get unstuck. Co-designed by therapists, coaches, users and AI folk, Help Bot lets you set the pace, helps when it can, and never judges. It is free and anonymous - so give it a try!</p>
              <p class="subheading" style={{color:"white"}}>Nothing can match the privacy of an anonymous conversation with an AI bot. Think of it as an interactive journal meets life coach. Wysa is good at asking the right probing questions, and helping you untangle and unwind after a hard day.</p>
            </div>
            <div className="col-lg-3 fadeIn d-none d-lg-block">
              <img src="https://woebot.io/static/app-d427756f065bfa07d4125d9be3d8ee8d.gif" alt="" style={{width: "95%", position: "relative", left: "30%", translateX: "25%"}} className="Phone"/>
            </div>
            <div className="col-lg-12 fadeInLeft d-none d-lg-block" style={{position: "relative", right: "15%"}}>
              <img src="https://pluspng.com/img-png/get-it-on-google-play-png-file-get-it-on-google-play-svg-1280.png" alt="" style={{width:"20rem", padding: "15px" }}/>
              <img src="https://cdn.worldvectorlogo.com/logos/download-on-the-app-store-apple.svg" alt="" style={{width:"20rem", padding: "15px"}}/>
            </div>
          </div>
        </div>
      </div>
      <div id="bgColor" className="pb-2">
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="4000">
          {/* <ol className="carousel-indicators"> */}
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
          {/* </ol> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="cover me " src="https://images.pexels.com/photos/3787818/pexels-photo-3787818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>Coaches to help start and stick with it</h1>
                  <p style={{color: "white"}}>Each employee gets a trained coach, available by phone, text or email, to personalize the program and keep the motivation going.</p>
                  <p><a className="btn btn-dark btn-primary btn-lg" href="#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="cover" src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
              <div className="container">
                <div className="carousel-caption">
                  <h1 style={{color: "black"}}>Bite-size activities Big-size outcomes</h1>
                  <p>How do you make digital therapy enjoyable and effective for your employees? Simple. With 5-minute activities that are easy to do—and backed up with clinical proof.</p>
                  <p><a className="btn btn-lg btn-primary btn-outline-info" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="cover" src="https://images.pexels.com/photos/1007901/pexels-photo-1007901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>Built with the world’s leading experts</h1>
                  <p><a className="btn btn-dark btn-primary btn-lg" href="#" role="button">We work with the top experts in anxiety and depression. It’s why our approach works.</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>


        <div className="center" style={{width: "90%"}}>

          <div className="testimonals mb-5">
            <div>
              <h2 className="featurette-heading" style={{color: "white"}}>David Hoang</h2>
              <p className="lead" style={{color:"white"}}>"Sometimes you need to talk things through - and everyone seems to have an opinion or analysis of your situation. All you need is someone who will listen and ask the right questions to help you figure things out."</p>
              <p className="lead" style={{color:"white"}}>I’ve got confidence back again. It’s completely changed me. My energy levels are higher. I’m not drained every day. Confidence is huge in my line of work.</p>
              </div>
              <img className="meBox d-none d-lg-block" src="https://assets.website-files.com/5b514e705d6e7eb2ee91092e/5b516121584bd75a2c0d7b89_Michiel_Headshot-p-500.jpeg" alt="" style={{width: "10%"}}/>
            </div>

            <div className="testimonals mb-5">
              <div>
                <h2 className="featurette-heading" style={{color: "white"}}>Frank Turner</h2>
                <p className="lead" style={{color:"white"}}>Through trial and error, I found a wonderful psychologist, who was able to help me through that time by using talk-therapy. Later on, I realized that when I was speaking with my friends and colleagues, I was simply repeating the conversations I previously had with my psychologist.
                  That’s when I first realized: "If I can help people by repeating these conversations, then we could teach a machine to do the same."</p>
                </div>
                <img className="meBox d-none d-lg-block" src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{width: "10%"}}/>
              </div>

              <div className="testimonals mb-5">
                <img className="meBox d-none d-lg-block" src="https://image.shutterstock.com/mosaic_250/2936380/640011838/stock-photo-handsome-unshaven-young-dark-skinned-male-laughing-out-loud-at-funny-meme-he-found-on-internet-640011838.jpg" alt="" style={{width: "10%"}}/>
                <div>
                  <h2 className="featurette-heading" style={{color: "white"}}>Derick Lee</h2>
                  <p className="lead" style={{color:"white"}}>"I knew that I was feeling isolated and depressed, and I knew that I was not living my best life, but was not sure exactly where to start. I decided to try this because [therapy] wasn’t really helping me deal with my anxiety in the here and now."</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-2 center pt-5 mt-5">
                <Link to="/SignIn" style={{textDecoration: "none"}}>
                <button className="btn btn-lg btn-info btn-block " type="button" style={{backgroundColor:"#32a5ff"}}>Start Now</button>
              </Link>

            </div>
            {/* Footer */ }
            <div>
              <footer className="container">
                <hr className="featurette-divider" />
                <p className="float-right"><a href="#" style={{color:"white"}}>Back to top</a></p>
                <p style={{color:"white"}}>© 2017-2019 Company, Inc. · <a href="#" style={{color:"white"}}>Privacy</a> · <a href="#" style={{color:"white"}}>Terms</a></p>
              </footer>
            </div>
          </div>
        </div>
      );
  }
}

  export default Home
