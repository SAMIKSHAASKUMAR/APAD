import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="topbar__title">Hardware Resource Management Portal</div>
        <nav className="topbar__nav">
          <NavLink to="/about" className="topbar__link">
            About
          </NavLink>
          <NavLink to="/login" className="topbar__link">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="topbar__link">
            Sign Up
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="*" element={<LoginComponent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
