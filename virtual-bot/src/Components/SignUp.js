import React, {useState, useEffect} from "react"

function SignUp(){

  const [checked, setChecked] = useState(false)

  function flag(){
    setChecked( prevState => !prevState)
  }


  return(
    <div>

      <div className="container pt-5">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
            <h1>Create an Account</h1>
            <p className="font-italic text-muted mb-0">These are difficult times, and it is natural to feel anxious and vulnerable.
              But you don't have to go through this alone.</p>
            </div>
            {/* Registeration Form */}
            <div className="col-md-7 col-lg-6 ml-auto">
              <form action="#">

                <div className="row">
                  {/* First Name */}
                  <div className="col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white px-4 border-md border-left-1" required autofocus/>
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white px-4 border-md border-right-1" required/>
                    </div>
                  </div>
                  {/* Email Address */}
                  <div className="col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white px-4 border-md" required />
                    </div>
                  </div>
                  {/* Phone Number */}
                  <div className="input-group col-lg-12 mb-4">
                    <select id="countryCode" name="countryCode" style={{maxWidth: '80px'}} className="custom-select form-control bg-white border-md h-100 font-weight-bold text-muted">
                      <option value>+1</option>
                      <option value>+8</option>
                      <option value>+10</option>
                      <option value>+15</option>
                    </select>
                    <input id="phoneNumber" type="tel" name="phone" placeholder="XXX-XXX-XXXX" className="form-control bg-white border-md border-left-0 pl-3" required/>
                  </div>
                  {/* Password */}
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white px-4 border-md" required/>
                    </div>
                  </div>
                  {/* Password Confirmation */}
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" className="form-control bg-white px-4 border-md" required/>
                    </div>
                  </div>
                  {/* Agree to terms */}
                  <div className="input-group col-lg-12 mb-4 form-check ml-3">
                    <input type="checkbox" className="form-check-input" id="termCheck" onClick={flag}/>
                    <label className="form-check-label px-3" htmlFor="termCheck">Agree to the Terms Of Conditions</label>
                  </div>
                  {/* Submit Button */}
                  <div className="form-group col-lg-12 mx-auto mb-0">
                      {checked === true ? <button className="btn btn-lg btn-block btn btn-outline-light" type="submit" style={{backgroundColor:"#32a5ff"}}>Sign in</button> :
                      <a href="#" className="btn btn-secondary btn-block py-2"> <span>Please Agree to the Terms of Conditions</span> </a>
                      }
                  </div>
                  {/* Divider Text */}
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5"/>
                    <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                    <div className="border-bottom w-100 mr-5"/>
                  </div>
                  {/* Social Login */}
                  <div className="form-group col-lg-12 mx-auto">
                    <a href="#" className="btn btn-primary btn-block py-2" style={{backgroundColor:"#32a5ff"}}>
                      <span>Continue with Facebook</span>
                    </a>
                    <a href="#" className="btn btn-primary btn-block py-2" style={{backgroundColor:"#32a5ff"}}>
                      <span>Continue with Twitter</span>
                    </a>
                  </div>
                  {/* Already Registered */}
                  <div className="text-center w-100">
                    <p className="text-muted font-weight-bold">Already Registered? <a href="/SignIn" className="text-primary ml-2">Login</a></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default SignUp
