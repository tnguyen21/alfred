import React from "react";
import "./App.css";

import Summary from "../Summary/Summary";
import UserInput from "../UserInput/UserInput";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1 className="header">Alfred</h1>
        <p>description/how-to</p>
      </div>
      <Summary />
      <UserInput />
    </div>
  );
}
