import React from "react";
import logo from "../assets/logo.svg";

export default function() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="row">
          <div className="col App-logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Gif Search</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
