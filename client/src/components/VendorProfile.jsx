import React from "react";

function VendorProfile({ profileImage, name, bio, location, joined }){
    return (
        <div style={{
            backgroundColor: "#fff",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            alignItems: "center"
        }}>
            <img
                src={profileImage}
                alt="Profile Picture"
                style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "8px",
                    objectFit: "cover"
                }}
            />
            <div>
                <h2 style={{ fontSize: "18px", fontWeight: "600", margin:0, textAlign: "center" }}>
                    {name}
                </h2>
                <p style={{ fontSize: "14px", color: "#444", margin: "10px"}}>
                    {bio}
                </p>
                <p style={{ fontSize: "20px", color: "#888", marginTop: "100px" }}>
                   📍 {location} . Joined {joined} 
                </p>

            </div>

            
        </div>
    );
}

export default VendorProfile;