import React from "react";

const ResultCard = ({ inputValue }) => {
  return (
    <div className="result-card container">
      <label className="result-label" htmlFor="ip-address">
        IP Address
      </label>
      <div className="result">{inputValue}</div>
      <label className="result-label" htmlFor="location">
        Location
      </label>
      <div className="result">Brooklyn, NY 10001</div>
      <label className="result-label" htmlFor="timezone">
        Timezone
      </label>
      <div className="result">UTC -05:00</div>
      <label className="result-label" htmlFor="isp">
        ISP
      </label>
      <div className="result">SpaceX Starlink</div>
    </div>
  );
};

export default ResultCard;
