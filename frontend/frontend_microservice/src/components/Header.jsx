import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

// This is a "smart" component that checks the URL to decide which header to show.
export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  // 1. If the URL starts with "/projects", show the Project header
  if (pathname.startsWith('/projects')) {
    return (
      <header className="topbar">
        <div className="topbar__title">Project Management</div>
        <nav className="topbar__nav">
          <NavLink to="/projects/view" className="topbar__link">View</NavLink>
          <NavLink to="/projects/create" className="topbar__link">Create</NavLink>
          <NavLink to="/projects/add-user" className="topbar__link">Add User</NavLink>
          <NavLink to="/about" className="topbar__link">About</NavLink>
        </nav>
      </header>
    );
  }

  // 2. If the URL is "/inventory", show the Inventory header
  // Note: I changed your <button>s to <NavLink>s to make them work with React Router.
  if (pathname === '/inventory') {
    return (
      <header className="topbar">
        <div className="topbar__title">Inventory Management</div>
        <nav className="topbar__nav">
          <NavLink to="/inventory" className="topbar__link">Inventory</NavLink>
          <NavLink to="/about" className="topbar__link">About</NavLink>
        </nav>
      </header>
    );
  }

  // 3. For all other pages (Login, Signup, About, Home), show the main User header
  return (
    <header className="topbar">
      <div className="topbar__title">Hardware Resource Management Portal</div>
      <nav className="topbar__nav">
        <NavLink to="/about" className="topbar__link">About</NavLink>
        <NavLink to="/login" className="topbar__link">Sign In</NavLink>
        <NavLink to="/signup" className="topbar__link">Sign Up</NavLink>
      </nav>
    </header>
  );
}