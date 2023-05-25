import React, { useRef, useEffect } from "react";

import iconArrow from "../assets/icon-arrow.svg";

const InputIP = ({ setResultObject }) => {
  const inputRef = useRef(null);

  // On initial load, we want to make an API call to get user's public IP
  useEffect(() => {
    const noIpURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_REACT_API_KEY
    }`;
    getIpData(noIpURL);
  }, []);

  // Function to do API call
  const getIpData = async (url) => {
    // https://geo.ipify.org/
    const response = await fetch(url);
    const data = await response.json();
    setResultObject(data);
  };

  // When user submits IP address
  const handleSubmit = (e) => {
    e.preventDefault();
    const IpURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_REACT_API_KEY
    }&ipAddress=${inputRef.current.value}`;
    getIpData(IpURL);
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
