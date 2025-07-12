/**
 * App.js
 * Main entry point for the React application. Handles routing and layout.
 */

import './App.css';
// Navbar component for site navigation
import Navbar from "./components/Navbar";
// Home page component
import Home from "./pages/Home";
// Footer component for site footer
import Footer from "./components/Footer";
// About and Contact page components
import About from "./pages/About";
import Contact from './pages/Contact';
// React Router imports for client-side routing
import { BrowserRouter as Router, Routes, Route } from "react-router";
// Shop page component
import Shop from './pages/Shop';
// User and Vendor authentication and dashboard components
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import VendorRegister from './pages/VendorRegister';
import VendorLogin from './pages/VendorLogin';
import VendorDashboard from './pages/VendorDashboard';
import UserDashboard from './pages/UserDashboard';
// Link component for navigation
import { Link } from "react-router";

/**
 * Main App component that sets up the application layout and routes.
 * @returns {JSX.Element} The main application component.
 */
function App() {
  return (
    <div className="App">
        {/* Router wraps the entire app to enable routing */}
        <Router>
          {/* Navigation bar at the top */}
          <Navbar />
          {/* Define all application routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-register" element={<UserRegister/>} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/vendor-register" element={<VendorRegister/>} />
            <Route path="/login-vendor" element={<VendorLogin/>} />
            <Route path="/vendor-dashboard" element={<VendorDashboard/>} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
          {/* Decorative section encouraging vendor registration */}
          <section className='decorative-strip'>
            <h2>Want to become a vendor?</h2>
            <p>Join hundreds of Stratizens earning from their crafts, products and skills.</p>
            <Link to="/vendor-register"><button className='cta-btn'>Register Now</button></Link>
          </section>
          {/* Footer at the bottom of the page */}
          <Footer />
        </Router>
      </div>
  );
}

export default App;
