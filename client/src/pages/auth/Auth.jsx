import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction.js";


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch()

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password !== data.confirmpassword ? dispatch(signUp(data)) : setConfirmPassword(false)
    }else{
      dispatch(logIn(data))
    }
  }

  const resetForm =()=>{
    setConfirmPassword(true)
    setData({ firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",})
  }

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Travel Media</h1>
          <h6>Explore the ideas throughout the World</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                onChange={handleChange}
                type="text"
                className="infoInput"
                placeholder="Firstname"
                name="firstname"
                value={data.firstname}
              />
              <input
                onChange={handleChange}
                type="text"
                className="infoInput"
                placeholder="LastName"
                name="lastname"
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              className="infoInput"
              placeholder="usenrame"
              value={data.username}
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type="password"
              className="infoInput"
              name="password"
              placeholder="password"
              value={data.password}
            />
            {isSignUp && (
              <input
                onChange={handleChange}
                type="password"
                value={data.confirmpassword}
                className="infoInput"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            )}
          </div>
          <span style={{display:confirmPassword?"none":"block",color:"red",fontSize:'12px',alignSelf:"flex-end",margin:"5px"}}>
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {setIsSignUp((prev) => !prev);resetForm()}}
            >
              {isSignUp
                ? "Already have an account . Login!"
                : "Don't Have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Sign up" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Login </h3>

        <div>
          <input
            type="text"
            name="username"
            className="infoInput"
            placeholder="usenrame"
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="password"
          />
        </div>

        <button className="button infoButton" type="submit">
          Signup
        </button>
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
          <input
            type="text"
            name="username"
            className="infoInput"
            placeholder="usenrame"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpassword"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account . Login
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
