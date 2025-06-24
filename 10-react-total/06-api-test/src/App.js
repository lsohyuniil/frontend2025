import "./App.css";
import CounterState from "./components/CounterState";
import CounterZustand from "./components/CounterZustand";
import FakeStore from "./components/FakeStore";
// import Movie from "./components/Movie";
// import AxiosEx from "./components/AxiosEx";
// import FetchEx from "./components/FetchEx";
// import Weather from "./components/Weather";

function App() {
  return (
    <div>
      {/* <FetchEx />
      <AxiosEx /> */}
      {/* <Weather /> */}
      {/* <Movie /> */}
      <FakeStore />
      {/* <h1>counter</h1>
      <h2>useState, useContext</h2>
      <CounterState />
      <hr />

      <h2>zustand</h2>
      <CounterZustand />
      <hr />

      <h2>recoil</h2>
      <hr /> */}
    </div>
  );
}

export default App;
