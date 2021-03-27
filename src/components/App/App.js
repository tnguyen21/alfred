import React from "react";
import "./App.css";

import Summary from "../Summary/Summary";
import UserInput from "../UserInput/UserInput";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>add some contet</p>
      </header>

      <Summary />
      <UserInput />
    </div>
  );
}
