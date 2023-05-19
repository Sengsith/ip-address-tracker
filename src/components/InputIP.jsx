import React from "react";
import iconArrow from "../assets/icon-arrow.svg";

const InputIP = ({ setInputValue }) => {
  return (
    <div className="input-ip__wrapper container">
      <input
        className="input-ip"
        type="text"
        placeholder="Enter IP address..."
      ></input>
      <button className="arrow-btn">
        <img
          className="arrow-icon"
          src={iconArrow}
          alt="Arrow right submit button"
        />
      </button>
    </div>
  );
};

export default InputIP;
