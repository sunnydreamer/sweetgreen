import "./../App.scss";

// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";

// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());
  // console.log(user);
  return (
    <main className="App">
      <Navbar user={user} setUser={setUser} />

      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </>
    </main>
  );
};

// EXPORT COMPONENT
export default App;
