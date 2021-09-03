import React, { useState } from "react";
import Login from "../login/login";
import Register from "../register/register";
import "./log.css";

export default function Log() {
  const [login, setLogin] = useState(true);
  const [registered, setRegistered] = useState(false);  
  
  const loginClickHandler = () => {
    setRegistered(false);
    setLogin(true);
  };
  const registerClickHandler = () => {
    setRegistered(false);
    setLogin(false);
  };


  return (
    <div className="container">
      <div className="log">
        <div className="">
          <button onClick={loginClickHandler} className="btn btn-dark btn-lg" type="button">
            Login
          </button>
          <button onClick={registerClickHandler} className="btn btn-danger btn-lg" type="button">
            Register
          </button>
        </div>
        {login ? <Login /> : <Register registered={registered} setRegistered={setRegistered}/>}
      </div>
    </div>
  );
}
