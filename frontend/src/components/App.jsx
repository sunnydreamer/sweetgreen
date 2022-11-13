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
import NewPage from "../pages/NewPage";
import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";
import CheckoutPage from "../pages/CheckoutPage";
import UpdatePage from "../pages/UpdatePage";
import Footer from "./Footer";

// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());

  const [cart, setCart] = useState({});
  const [page, setPage] = useState(false);

  return (
    <main className="App">
      <Navbar
        user={user}
        setUser={setUser}
        setPage={setPage}
        page={page}
        cart={cart}
      />

      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                setCart={setCart}
                setPage={setPage}
                page={page}
              />
            }
          />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />

          <Route
            path="/:category"
            element={<CategoryPage page={page} setPage={setPage} user={user} />}
          />
          <Route path="/:category/new" element={<NewPage />} />
          <Route
            path="/:category/:id"
            element={
              <ShowPage
                cart={cart}
                setCart={setCart}
                setPage={setPage}
                page={page}
                user={user}
              />
            }
          />
          <Route path="/:category/:id/update" element={<UpdatePage />} />
        </Routes>
      </>
      <Footer />
    </main>
  );
};

// EXPORT COMPONENT
export default App;
