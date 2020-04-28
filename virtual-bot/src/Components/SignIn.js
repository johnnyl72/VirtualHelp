import React, {Component} from "react"
import '../signin.css';
import '../product.css';
import {Link} from 'react-router-dom';
import fire from '../config/Fire';

class SignIn extends Component{

  constructor(props) {
   super(props);
   this.login = this.login.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.state = {
     email: '',
     password: ''
   };
    if (props.user) {
       props.history.push("/")
    }

 }

 handleChange(e) {
   this.setState({ [e.target.name]: e.target.value });
 }

 login(e) {
   e.preventDefault();
   //Promise
   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
   }).catch((error) => {
       console.log(error);
     });
 }

 render(){
   return(
     <div>
       <div>
         <form className="form-signin pt-5">
             <img className="mb-4" id="centerlog"  src="https://i.pinimg.com/originals/ba/92/fe/ba92fe11861df19e26a8be133acc5e10.png" alt="" style={{width:"72px", height:"72px", transform: "rotate(.6turn)", filter: "hue-rotate(50deg"}}/>
             <h1 className="h3 mb-3 font-weight-normal">Please sign in.</h1>

             <label htmlFor="inputEmail" className="sr-only">Email address</label>
             <input value={this.state.email} onChange={this.handleChange} name="email" autocomplete="off" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />

             <label htmlFor="inputPassword" className="sr-only">Password</label>
             <input value={this.state.password} onChange={this.handleChange} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />

             <div className="checkbox mb-3">
               <label>
                 <input type="checkbox" defaultValue="remember-me" /> Remember me
               </label>
             </div>

             <Link to="/SignUp" style={{textDecoration: "none"}}>
                <div className="pb-1">
                  <a href="" >New User? Sign Up Now!</a>
                </div>
              </Link>

              <div className="pb-3">
                <a href="" >Forget your password?</a>
              </div>

              <button onClick={this.login} className="btn btn-lg btn-primary btn-block btn btn-outline-light" type="submit" style={{backgroundColor:"#32a5ff"}}>Sign in</button>
          </form>
     </div>
   </div>
 );
  }
}

export default SignIn
