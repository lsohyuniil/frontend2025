import "./App.css";
import AxiosEx from "./components/AxiosEx";
import FetchEx from "./components/FetchEx";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <FetchEx />
      <AxiosEx />
      <Weather />
    </div>
  );
}

export default App;
