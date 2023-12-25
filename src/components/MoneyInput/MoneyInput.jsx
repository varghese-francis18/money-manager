import React from "react";
import "./MoneyInput.scss";

const MoneyInput = () => {
  return (
    <div className="money-input">
      <input className="money-input__name " type="text" placeholder="Name..." />
      <input
        className="money-input__value"
        type="number"
        placeholder="Value..."
      />
      <button className="money-input__button" type="button">
        Add
      </button>
    </div>
  );
};

export default MoneyInput;
