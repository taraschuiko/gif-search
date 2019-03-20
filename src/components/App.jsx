import React, { Component } from "react";
import "./App.scss";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
export const API_KEY = "UEf49JA3Xnc8KTcjMpUNZOUt7i2ZbOiD";
export const API_URL =
  "https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/";
