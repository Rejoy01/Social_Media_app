import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Travel Media</h1>
          <h6>Explore the ideas throughout the World</h6>
        </div>
      </div>
      <SignUp />
    </div>
  );
};

function Login() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Login </h3>
          
          <div>
              <input type="text" name="username" className="infoInput" placeholder="usenrame"/>
          </div>
          <div>
              <input type="text" className="infoInput" name="password" placeholder="password" />
              
          </div>
          
          <button className="button infoButton" type="submit">Signup</button>
        </form>
      </div>
    );
  }
  


function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Firstname"
            name="firstname"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="LastName"
            name="lastname"
          />
        </div>
        <div>
            <input type="text" name="username" className="infoInput" placeholder="usenrame"/>
        </div>
        <div>
            <input type="text" className="infoInput" name="password" placeholder="password" />
            <input type="text" className="infoInput" name="confirmpassword" placeholder="Confirm Password" />
        </div>
        <div>
            <span style={{fontSize:'12px'}}>Already have an account . Login</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
