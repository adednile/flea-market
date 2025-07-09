import React, { useState } from "react";
import Logo from "../assets/flea_market_logo.png";
import { Link } from "react-router";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () =>  {
      setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="flea market logo"/>
          <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/user-dashboard">User Dashboard</Link>

          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
    </div>

    
  );
}

export default Navbar;