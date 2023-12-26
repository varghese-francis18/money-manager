import React from "react";
import Logo from "./components/Logo/Logo";
import Income from "./components/Income/Income";
import MoneyInput from "./components/MoneyInput/MoneyInput";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="container__logo">
          <Logo />
        </div>
        <div className="container__income">
          <Income />
        </div>
      </div>
      <div className="container__money_input">
        <MoneyInput />
      </div>
    </div>
  );
};

export default App;
