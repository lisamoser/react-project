import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <footer>
        This project was coded by Lisa Moser and it is open-sourced on{" "}
        <a href="https://github.com/lisamoser/react-project" target="_blank">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://react-weather-project-lisamoser.netlify.app/"
          target="_blank"
        >
          {" "}
          Netlify.{" "}
        </a>
      </footer>
    </div>
  );
}
