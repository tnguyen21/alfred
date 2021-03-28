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
        <p>Batman had Alfred to assist him and now you can too! Alfred is here to give you a summary of your lectures.
           With the increase of online classrooms, he is here to improve your learning experience. Upload your video below
           and leave the rest to Alfred! </p>
      </header>

      <Summary />
      <UserInput />
    </div>
  );
}
