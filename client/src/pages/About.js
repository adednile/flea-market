import React from "react";
import purchase from "../assets/people-buying.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: 'url(' + purchase + ')' }}
      >
        hjhgfds
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>The flea market website enables users buy and sell products from a wide range of categories. We are dedicated to provide users with a seamless shoping experience. </p>
      </div>
    </div>
  );
}

export default About;
