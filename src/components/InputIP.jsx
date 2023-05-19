import React, { useRef } from "react";

import iconArrow from "../assets/icon-arrow.svg";

const InputIP = ({ setInputValue }) => {
  const inputRef = useRef(null);

  const getData = async () => {
    // https://geo.ipify.org/
    const URL = `https://geo.ipify.org/api/v2/country?apiKey=${
      import.meta.env.VITE_REACT_API_KEY
    }&ipAddress=${inputRef.current.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);
    getData();
  };

  return (
    <div className="input-ip__wrapper container">
      <form action="" className="input-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
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
      </form>
    </div>
  );
};

export default InputIP;
