import React from "react";
import purchase from "../assets/people-buying.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{
           backgroundImage: 'url(' + purchase + ')', 
           backgroundSize: "cover",
           backgroundPosition: "center",
           height: "50vh",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           color: "#fff",
           textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
           fontSize: "2rem",
           fontWeight: "bold",
        
        }}
      >
        Connecting Buyers & Sellers
        
      </div>
      <div className="aboutBottom" style={{ padding: "3rem", margin:"auto", lineHeight:"1.8", fontSize:"1.1rem"}}>

        <h1 style={{ textAlign:"center", marginBottom:"1.5rem"}}>ABOUT US</h1>

        <p>
          Welcome to our Flea Market platform -- your go to destination for discovering unique, affordable & diverse products. Whether you're selling pre-loved items or a local vendor showcasing handmade crafts, we provide the tools to connect you with the right buyers.
        </p>
        <p>
          Our mission is to empower communities by making buying and selling simple, secure and accessible. We offer a seamless user experience, mobile-friendly interface and built in escrow protection for worry-free transactions
        </p>
        <p>
          We're more than a marketplace -- we're a growing ecosystem for opportunity and exchange, fostering trust, transparency and entrepreneurial spirit within schools and neighbourhoods.
        </p>
        <p>
          Thank you for being a part of our journey!
        </p>
      </div>
    </div>
  );
}

export default About;
