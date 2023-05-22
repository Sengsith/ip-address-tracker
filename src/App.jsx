import { useState } from "react";

import InputIP from "./components/InputIP";
import ResultCard from "./components/ResultCard";
import LeafletMap from "./components/LeafletMap";

const App = () => {
  // Going to create state in here and pass it into InputIP, get it back and pass results into ResultCard
  const [resultObject, setResultObject] = useState({});

  return (
    <div className="app">
      <div className="title_wrapper">
        <h1 className="title">IP Address Tracker</h1>
        <InputIP setResultObject={setResultObject} />
      </div>
      <ResultCard resultObject={resultObject} />
      <LeafletMap resultObject={resultObject} />
    </div>
  );
};

export default App;
