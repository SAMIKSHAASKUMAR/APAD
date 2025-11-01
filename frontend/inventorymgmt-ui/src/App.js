// src/App.js
import React, { useState } from "react";
import InventoryPage from "./components/InventoryPage";
import About from "./components/AboutComponent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tab, setTab] = useState("inventory");

  return (
    <>
      <header className="topbar">
        <div className="topbar__title">Inventory Management</div>
        <div>
          <button
            onClick={() => setTab("inventory")}
            style={{
              marginRight: "0.5rem",
              background: tab === "inventory" ? "#fff" : "transparent",
              color: tab === "inventory" ? "#4b0082" : "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            Inventory
          </button>
          <button
            onClick={() => setTab("about")}
            style={{
              background: tab === "about" ? "#fff" : "transparent",
              color: tab === "about" ? "#4b0082" : "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            About
          </button>
        </div>
      </header>

      {tab === "inventory" ? <InventoryPage /> : <About />}

      <Footer />
    </>
  );
}

export default App;
