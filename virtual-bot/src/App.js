import React from 'react';
import Nav from './Components/Nav'
import Home from './Components/Home'
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
            <Route path="/" exact component ={Home}/>
            <Route path="/WhatYouGet" exact component ={WhatYouGet}/>
            <Route path="/SignUp" exact component ={SignUp}/>
            <Route path="/SignIn" exact component ={SignIn}/>
            <Route path="/HowItWorks" exact component ={HowItWorks}/>
            <Route path="/About" component={About} />
          </Switch>
        </div>
      </Router>
    );

  }

}

export default App;
