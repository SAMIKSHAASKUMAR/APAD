import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import AboutComponent from "./components/AboutComponent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="topbar__title">Hardware Resource Management Portal</div>
        <nav className="topbar__nav">
          <NavLink to="/about" className="topbar__link">About</NavLink>
          <NavLink to="/login" className="topbar__link">Sign In</NavLink>
          <NavLink to="/signup" className="topbar__link">Sign Up</NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<AboutComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          {/* default -> About */}
          <Route path="*" element={<AboutComponent />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
