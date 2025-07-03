import { useState } from "react";
import { Link, useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import VendorProfile from "../components/VendorProfile";
import "../styles/VendorDashboard.css";

function VendorDashboard(){

    const products = [
            {
                name: "Siwaka Dishes",
                image: require("../assets/tumaini-dishes.jpg"),
                price: "KES 350",
                category: "Food"
            },
            {
                name: "House Cleaning",
                image: require("../assets/house-cleaning.jpg"), //images not showing for some reason
                price: "KES 5,000"
            },
            {
                name: "Shoes",
                image: require("../assets/shoes1-0.jpg"),
                price: "KES 950"
            },
            {
                name: "Maasai Clothes",
                image: require("../assets/maasai-wear.jpg"),
                price: "KES 1,250"
            }
            
        ];

    const profile ={
        profileImage: require("../assets/man-smiling.jpg"),
            name: "Tumaini Wekesa",
            bio: "Passionate about local foods",
            location: "Nairobi, Kenya",
            joined: "March 2023"
    };

    return(
        <div className="vendor-dashboard">
            <header className="dashboard-header">
                <h1>Vendor Dashboard</h1>
                <p>Manage your store and track your performance</p>
            </header>

            <section className="profile-section">
                <VendorProfile {...profile} />
            </section>

            <section className="metrics-grid">
                {[
                    { label: "Total Products", value: products.length },
                    { label: "Total Sales", value: 156 },
                    { label: "Rating", value: 4.8 },
                    { label: "Reviews", value: 89 }
                ].map((item, idx) => (
                    <div key={idx} className="metric-card">
                        <p className="metric-label">{item.label}</p>
                        <p className="metric-value">{item.value}</p>
                    </div>
                    ))}
                </section>

                <section className="products-header">
                    <h3>My Products</h3>
                    <button className="add-button">+ Add Items</button>
                </section>

                <section className="products-grid">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                    </section>
                </div>
    );


}

export default VendorDashboard;



