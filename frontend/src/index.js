import "./index.css";

// IMPORT REACT
import React from "react";

// IMPORT REACTDOM
import ReactDOM from "react-dom/client";

// ADDITIONAL IMPORTS
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

// RENDER COMPONENTS
ReactDOM.createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);
