import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CreateProject from "./components/CreateProject";
import ViewProject from "./components/ViewProject";
import AddUserToProject from "./components/AddUserToProject";
import AboutComponent from "./components/AboutComponent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="topbar__title">Project Management</div>
        <nav className="topbar__nav">
          <NavLink to="/about" className="topbar__link">About</NavLink>
          <NavLink to="/create" className="topbar__link">Create</NavLink>
          <NavLink to="/view" className="topbar__link">View</NavLink>
          <NavLink to="/add" className="topbar__link">Add User</NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<AboutComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/create" element={<CreateProject />} />
          <Route path="/view" element={<ViewProject />} />
          <Route path="/add" element={<AddUserToProject />} />
          {/* default -> About */}
          <Route path="*" element={<AboutComponent />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
