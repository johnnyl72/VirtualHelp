import React from "react"
import '../product.css';
import '../animate.css';
class Home extends React.Component{

  render(){

    return(
      <div>
          <div style={{backgroundImage: "url(https://wallpaperplay.com/walls/full/8/4/2/86369.jpg)"}} >
            <div style={{paddingTop: "10%", paddingBottom: "10%"}}>
              <div className="row center">
                <div className="col-lg-3 fadeIn">
                  <img src="https://cdn.clipart.email/1468a43d9aab498728e693cefdc57f7f_28-collection-of-robot-clipart-transparent-high-quality-free-_2220-2000.png"  style={{width: "400px", position: "relative", right: "75%"}}/>
                </div>
                <div className="col-lg-6 fadeIn">
                  <h1 class="heading" style={{color:"coral"}}>Introducting Help Bot</h1>
                  <br/>
                  <p class="subheading" style={{color:"white"}}>Sometimes we get all tangled up inside our heads, unable to move on. Help Bot is great at helping you get unstuck. Co-designed by therapists, coaches, users and AI folk, Help Bot lets you set the pace, helps when it can, and never judges. It is free and anonymous - so give it a try!</p>
                  <p class="subheading" style={{color:"white"}}>Nothing can match the privacy of an anonymous conversation with an AI bot. Think of it as an interactive journal meets life coach. Wysa is good at asking the right probing questions, and helping you untangle and unwind after a hard day.</p>
                </div>
                <div className="col-lg-3 fadeIn">
                  <img src="https://woebot.io/static/app-d427756f065bfa07d4125d9be3d8ee8d.gif" alt="" style={{width: "95%", position: "relative", left: "30%", translateX: "25%"}} className="Phone"/>
                </div>
                <div className="row fadeInLeft" style={{position: "relative", right: "15%"}}>
                  <img src="https://pluspng.com/img-png/get-it-on-google-play-png-file-get-it-on-google-play-svg-1280.png" alt="" style={{width:"20%", padding: "15px" }}/>
                  <img src="https://cdn.worldvectorlogo.com/logos/download-on-the-app-store-apple.svg" alt="" style={{width:"20%", padding: "15px"}}/>
                </div>
              </div>
            </div>
          </div>
          <div id="bgColor" className="pb-2">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="cover" src="https://images.pexels.com/photos/3787818/pexels-photo-3787818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="container">
                  <div className="carousel-caption text-left">
                    <h1>Example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. </p>
                    <p><a className="btn btn-dark btn-primary btn-lg" href="#" role="button">Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="cover" src="https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="container">
                  <div className="carousel-caption">
                    <h1 style={{color: "black"}}>Another example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary btn-outline-info" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="cover" src="https://images.pexels.com/photos/1007901/pexels-photo-1007901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <div className="container">
                  <div className="carousel-caption text-right">
                    <h1>One more for good measure.</h1>
                    <p><a className="btn btn-dark btn-primary btn-lg" href="#" role="button">Browse gallery</a></p>
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
            <div className="p-5">
              <div class="container">
                {/* START THE FEATURETTES */}
                <div className="row featurette">
                  <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                  </div>
                  <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto fadeInRight" width={500} height={500} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="container" >
                <div className="row featurette">
                  <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto fadeInLeft" width={500} height={500} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="container">
                <div className="row featurette">
                  <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto fadeInRight" width={500} height={500} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                  </div>
                </div>
              </div>
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
