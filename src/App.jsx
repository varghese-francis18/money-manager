import React from "react";
import Logo from "./components/Logo/Logo";
import Income from "./components/Income/Income";
import MoneyInput from "./components/MoneyInput/MoneyInput";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="left-container">
        <div className="left-container__logo">
          <Logo />
        </div>
        <Income />
        <MoneyInput />
      </div>
      <div className="right-container">Hello</div>
    </div>
  );
};

export default App;
