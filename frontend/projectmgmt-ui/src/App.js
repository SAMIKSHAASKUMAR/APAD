import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CreateProject from "./components/CreateProject";
import ViewProject from "./components/ViewProject";
import AddUserToProject from "./components/AddUserToProject";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="topbar__title">Project Management</div>
        <nav className="topbar__nav">
          <NavLink to="/create" className="topbar__link">
            Create
          </NavLink>
          <NavLink to="/view" className="topbar__link">
            View
          </NavLink>
          <NavLink to="/add-user" className="topbar__link">
            Add User
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/create" element={<CreateProject />} />
          <Route path="/view" element={<ViewProject />} />
          <Route path="/add-user" element={<AddUserToProject />} />
          <Route path="*" element={<CreateProject />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
