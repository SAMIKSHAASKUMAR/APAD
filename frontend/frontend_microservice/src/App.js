import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import our new "smart" header
import Header from "./components/Header";

// Import all pages from their new locations in the 'pages' directory
import LoginPage from "./pages/User/LoginPage";
import SignupPage from "./pages/User/SignupPage";
import AboutPage from "./pages/AboutPage";
import CreateProjectPage from "./pages/Project/CreateProject";
import ViewProjectPage from "./pages/Project/ViewProject";
import AddUserToProjectPage from "./pages/Project/AddUserToProject";
import InventoryPage from "./pages/Inventory/InventoryPage";

// Import shared components
import Footer from "./components/Footer";

// Import the main stylesheet
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      {/* This is our new smart header. 
        It will automatically change based on the URL.
      */}
      <Header />

      <main className="main">
        {/* All routes are now managed in this one <Routes> component */}
        <Routes>
          {/* --- User Routes --- */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* --- Project Routes --- */}
          <Route path="/projects/view" element={<ViewProjectPage />} />
          <Route path="/projects/create" element={<CreateProjectPage />} />
          <Route path="/projects/add-user" element={<AddUserToProjectPage />} />

          {/* --- Inventory Route --- */}
          <Route path="/inventory" element={<InventoryPage />} />

          {/* --- Default & About Routes --- */}
          {/* This part ensures "localhost:8080" loads the About Page */}
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<AboutPage />} /> {/* Catches all other paths */}
        </Routes>
      </main>

      {/* The single, shared footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;