import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Login from "./pages/Login";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
