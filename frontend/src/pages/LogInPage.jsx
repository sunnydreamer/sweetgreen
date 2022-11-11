// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import LoginForm from "../components/LoginForm";

import welcomePic from "../images/Illus-StoreOpening.c8313ebf.png";

// CREATE COMPONENT
const LogInPage = ({ setUser }) => {
  return (
    <div className="authPage">
      <div className="welcomeContainer">
        <img src={welcomePic} alt="" className="welcomeImg" />
        <div className="welcomeText">Welcome to the sweetlife</div>
      </div>
      {/* 
      <SignUpForm setUser={setUser} /> */}
      <div className="formContainer">
        <LoginForm setUser={setUser} />
      </div>
    </div>
  );
};

// EXPORT COMPONENT
export default LogInPage;
