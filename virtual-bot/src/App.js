import React, {Component} from 'react';
import Nav from './Components/Nav'
import Home from './Components/Home'
import HowItWorks from './Components/HowItWorks'
import WhatYouGet from './Components/WhatYouGet'
import About from './Components/About'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import WelcomeBack from './Components/WelcomeBack'
import ChatSpace from './Components/ChatSpace'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import fire from './config/Fire';

class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
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
   }

  render(){
    return (
      <Router>
        <div>
          <Nav/>
          {/* {this.state.user ? ( <Redirect push to="/WelcomeBack"/>) : (<Redirect push to="SignIn"/>)} */}
          <Switch>
            <Route path="/" exact component ={Home}/>
            <Route path="/WhatYouGet" exact component ={WhatYouGet}/>
            <Route path="/SignUp" exact component ={SignUp}/>
            <Route path="/SignIn" exact component ={SignIn}/>
            <Route path="/HowItWorks" exact component ={HowItWorks}/>
            <Route path="/About" exact component={About} />
            <Route path="/WelcomeBack" exact component={WelcomeBack} />
            <Route path="/ChatSpace" exact component={ChatSpace} />
          </Switch>
        </div>
      </Router>
    );

  }

}

export default App;
