import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const loginuser = (e) => {
    e.preventDefault();
    console.log("me");
    auth
      .signInWithEmailAndPassword(Email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const registeruser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
          alt=""
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email:</h5>
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />

          <h5>password:</h5>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />

          <button onClick={loginuser} className="login_signinButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={registeruser} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
