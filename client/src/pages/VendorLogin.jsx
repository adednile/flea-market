import { useState } from "react";
import { Link, useNavigate } from "react-router";


function VendorLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        console.log("Log in in with", email, password);

        navigate("/vendor-dashboard");
    }

    return(
    
        <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#f5f5f5", 
      padding: "2rem" 
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Vendor Login</h2>
        
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.5rem" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.75rem",
              marginBottom: "1.5rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          <label style={{ marginBottom: "0.5rem" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.75rem",
              marginBottom: "1.5rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "0.75rem",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Don’t have an account?
        </p>
        <Link to="/vendor-register" style={{ display: "block", textAlign: "center" }}>
          <button style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "0.95rem",
            cursor: "pointer",
            marginTop: "0.5rem"
          }}>
            Register Here
          </button>
        </Link>
      </div>

      
    </div>
    );
}

export default VendorLogin;