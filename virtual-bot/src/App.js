import React from 'react';
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import HowItWorks from './Components/HowItWorks'
import WhatYouGet from './Components/WhatYouGet'
import About from './Components/About'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Home path="/" exact component ={Home}/>
            <Route path="/about" component={About} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
