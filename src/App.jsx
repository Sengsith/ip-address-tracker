import { useEffect } from "react";
import axios from "axios";

import InputIP from "./components/InputIP";
import ResultCard from "./components/ResultCard";

const App = () => {
  // Going to create state in here and pass it into InputIP, get it back and pass results into ResultCard

  useEffect(() => {
    // Get a response from backend
    const options = {
      method: "GET",
      url: "http://localhost:8000/address",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="title">IP Address Tracker</h1>
      <InputIP />
      <ResultCard />
      <div className="result"></div>
    </div>
  );
};

export default App;
