import React from "react";
import { Link } from "react-router";
import BannerImage from "../assets/Vendor-strath.jpg";
import "../styles/Home.css";
// import Footer from "../components/Footer";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="overlay"></div>
            <div className="headerContainer" >
                <h1> Flea Market </h1>
                <p> SHOP TILL YOU DROP </p>
                <Link to="/Shop">
                    <button> ORDER NOW </button>
                </Link>
            </div>
            
        </div>

        
    );
    
}

export default Home;