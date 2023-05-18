import InputIP from "./components/InputIP";
import ResultCard from "./components/ResultCard";

const App = () => {
  // Going to create state in here and pass it into InputIP, get it back and pass results into ResultCard

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
