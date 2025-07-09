import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from './pages/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';

import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import VendorRegister from './pages/VendorRegister';
import VendorLogin from './pages/VendorLogin';
import VendorDashboard from './pages/VendorDashboard';
import UserDashboard from './pages/UserDashboard';

import { Link } from "react-router";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-register" element={<UserRegister/>} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/vendor-register" element={<VendorRegister/>} />
            <Route path="/login-vendor" element={<VendorLogin/>} />
            <Route path="/vendor-dashboard" element={<VendorDashboard/>} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
          <section className='decorative-strip'>
            <h2>Want to become a vendor?</h2>
            <p>Join hundreds of Stratizens earning from their crafts, products and skills.</p>
            <Link to="/vendor-register"><button className='cta-btn'>Register Now</button></Link>
          </section>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
