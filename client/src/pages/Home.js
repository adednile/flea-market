import React from "react";
import { Link } from "react-router";
import BannerImage from "../assets/Vendor-strath.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer" >
                <h1> Flea Market </h1>
                <p> SHOP TILL YOU DROP </p>
                <Link to="/LandingPage">
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
    
}

export default Home;