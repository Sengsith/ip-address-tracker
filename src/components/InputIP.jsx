import React, { useRef } from "react";

import iconArrow from "../assets/icon-arrow.svg";

const InputIP = ({ setResultObject }) => {
  const inputRef = useRef(null);

  const getIpData = async () => {
    // https://geo.ipify.org/
    const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_REACT_API_KEY
    }&ipAddress=${inputRef.current.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    setResultObject(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIpData();
    inputRef.current.value = "";
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
