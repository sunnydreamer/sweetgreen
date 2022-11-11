import "./../App.scss";

// IMPORT REACT
import React, { useState, useEffect } from "react";

// ADDITIONAL IMPORTS
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import CategoryPage from "../pages/CategoryPage";
import ShowPage from "../pages/ShowPage";
import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";

// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());
  const [page, setPage] = useState(false);

  return (
    <main className="App">
      <Navbar user={user} setUser={setUser} setPage={setPage} page={page} />

      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/:category" element={<CategoryPage page={page} />} />

          <Route path="/:category/:id" element={<ShowPage />} />
        </Routes>
      </>
    </main>
  );
};

// EXPORT COMPONENT
export default App;
