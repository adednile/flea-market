import { useState } from "react";
import { Link, useNavigate } from "react-router";
// import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import VendorProfile from "../components/VendorProfile";

function VendorDashboard(){

    const products = [
            {
                name: "Siwaka Dishes",
                image: require("../assets/tumaini-dishes.jpg"),
                price: "KES 350"
            },
            {
                name: "House Cleaning",
                images: require("../assets/house-cleaning.jpg"), //images not showing for some reason
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
        <div style={{padding:"2rem", backgroundColor:"#f9fafb", fontFamily:"Ariaal, sans-serif", minHeight:"100vh"}}>
            <div style={{ marginBottom: "2rem"}}>
            <h1 style={{ fontSize:"24px", fontWeight:"bold", margin:0, textAlign:"center"}}>Vendor Dashboard</h1>
            <p style={{ color:"#666", marginTop:"4px"}}>Manage your store and track your performance</p>
            </div>

            {/* Vendor Profile Card Imported */}
            <div style={{ padding: "2rem"}}>
                <VendorProfile
                    profileImage={profile.profileImage}
                    name={profile.name}
                    bio={profile.bio}
                    location={profile.location}
                    joined={profile.joined}
                
                />
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                marginBottom: "2rem"
            }}>
                {[
                    { label: "Total Products", value:6},
                    { label: "Total Sales", value:156},
                    { label: "Rating", value: 4.8},
                    { label: "Reviews", value: 89}
                ].map((item, idx) => (
                    <div key={idx} style={{
                         backgroundColor: "#fff",
                         padding:"1rem",
                         borderRadius: "10px",
                         textAlign:"center",
                         boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                    }}>
                        <p style={{ fontSize:"14px", color:"#888", margin:0}}>{item.label}</p>
                        <p style={{ fontSize:"22px", fontWeight:"bold", marginTop:"0.5rem", color:"#333"}}>{item.value}</p>
                    </div>


                ))}
            </div>

            {/* Product Header */}
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginBottom:"1rem"
            }}>
                <h3 style={{ fontSize:"18px", fontWeight:"600", margin:0}}>My Products</h3>
                <button style={{
                    padding:"0.5rem 1rem",
                    backgroundColor:"#2563eb",
                    color:"white",
                    border:"none",
                    borderRadius:"6px",
                    cursor:"pointer"
                }}>Add Items</button>
            </div>
    

            <div style={{ display: "grid", gridTemplateColumns:"repeat(3, 1fr", gap:"20px"}}>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                    />
                ))}

            </div>
            
            {/* Footer buttons */}
            <div style={{ marginTop:"3rem", display:"flex", justifyContent:"center", gap:"20px"}}>
                <div style={{
                    backgroundColor:"#fff",
                    padding:"1rem 1.5rem",
                    borderRadius:"12px",
                    boxShadow:"0 2px 6px rgba(0,0,0,0.05)",
                    width:"180px",
                    cursor:"pointer"
                }}>
                    <div>
                        <p></p>
                    </div>

                </div>
            </div>
                
            
            {/* <div style={{ width:"100%"}}>
            <Footer />
            </div> */}
        </div>

    );


}

export default VendorDashboard;



