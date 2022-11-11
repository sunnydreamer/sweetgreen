// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import SignUpForm from "../components/SignUpForm";

import welcomePic from "../images/Illus-StoreOpening.c8313ebf.png";

// CREATE COMPONENT
const SignUpPage = ({ setUser }) => {
  return (
    <div className="authPage">
      <div className="welcomeContainer">
        <img src={welcomePic} alt="" className="welcomeImg" />
      </div>
      <div className="formContainer">
        <SignUpForm setUser={setUser} />
      </div>
    </div>
  );
};

// EXPORT COMPONENT
export default SignUpPage;
