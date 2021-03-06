import React from "react";
import Weather from "./Weather.js";
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity = "Manila"/>
      <footer>
        This project was coded by Katherin Michel and is {" "}
      <a href="https://github.com/KatherinMichel/react-weather-app"
      target="_blank" rel="noreferrer">
        open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
