// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { login } from "./../utilities/users-service";
import { Link } from "react-router-dom";

// CREATE COMPONENT
const LoginForm = ({ setUser }) => {
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      const user = await login({ email, password });

      // Add the user to state
      setUser(user.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
        <h1>Log In </h1>
        <p>
          Don't have an account? <Link to="/signup">Join Now</Link>
        </p>
        <form autoComplete="off">
          <input
            type="email"
            name="email"
            required
            onChange={(e) => {
              return handleInputChange(e);
            }}
            value={email}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            required
            onChange={(e) => {
              return handleInputChange(e);
            }}
            value={password}
            placeholder="Password"
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p>
        Forgot Password?
        <p />
      </p>
      <p className="error-message">{error}</p>
    </div>
  );
};

// EXPORT COMPONENT
export default LoginForm;
