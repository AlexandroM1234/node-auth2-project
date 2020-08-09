import React from "react";
import "./App.css";
import SignUp from "./components/signUp";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Route component={SignUp} path="/signup" />
    </div>
  );
}

export default App;
