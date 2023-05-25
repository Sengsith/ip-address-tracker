import React, { useState, useEffect } from "react";

const stateAbbreviations = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

const ResultCard = ({ resultObject }) => {
  // Create object for readability
  const [location, setLocation] = useState({});

  // Return the abbreviated state name, or full state name
  const getAbbreviation = (stateName) => {
    return stateAbbreviations[stateName] || stateName;
  };

  useEffect(() => {
    // Set location object to be resultObject's every time it changes
    setLocation(resultObject.location);
  }, [resultObject]);

  return (
    <div className="result-card container">
      <div className="ip-container result-flex-item">
        <label className="result-label" htmlFor="ip-address">
          IP Address
        </label>
        <div className="result">{resultObject.ip}</div>
      </div>
      <div className="vl"></div>
      <div className="location-container result-flex-item">
        <label className="result-label" htmlFor="location">
          Location
        </label>
        <div className="result">
          {location.city}, {getAbbreviation(location.region)}{" "}
          {location.postalCode}
        </div>
      </div>
      <div className="vl"></div>
      <div className="timezone-container result-flex-item">
        <label className="result-label" htmlFor="timezone">
          Timezone
        </label>
        <div className="result">UTC {location.timezone}</div>
      </div>
      <div className="vl"></div>
      <div className="isp-container result-flex-item">
        <label className="result-label" htmlFor="isp">
          ISP
        </label>
        <div className="result">{resultObject.isp}</div>
      </div>
    </div>
  );
};

export default ResultCard;
