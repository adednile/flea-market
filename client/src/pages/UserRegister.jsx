import { useState } from "react";
import { Link, useNavigate } from "react-router";


function UserRegister(){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        // locations: "",
        password: "",

    });

    function handleChange(e){
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        //replace with real registration logic
        console.log("Registering User: ", form);
    }

    // if (form.name.toLowerCase() === "tumaini" && form.password === "1234"){
    //     alert("Login Successful!");
    //     navigate("/vendor-dashboard");
    // } else {
    //     console.log("tumaini, 1234");
    // }

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
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Vendor Registration</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.5rem" }}>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          <label style={{ marginBottom: "0.5rem" }}>Email:</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          <label style={{ marginBottom: "0.5rem" }}>Phone:</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

          {/* <label style={{ marginBottom: "0.5rem" }}>Locations:</label>
          <input
            name="locations"
            value={form.locations}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          /> */}

          <label style={{ marginBottom: "0.5rem" }}>Password:</label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            type="password"
            style={{
              padding: "0.75rem",
              marginBottom: "1.5rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem"
            }}
          />

        <Link to="/user-login">
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
            Register
          </button></Link>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
          Already have an account?
        </p>
        <Link to="/user-login" style={{ display: "block", textAlign: "center" }}>
          <button style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "0.95rem",
            cursor: "pointer",
            marginTop: "0.5rem"
          }}>
            Login Here
          </button>
        </Link>
      </div>

      {/* <Footer /> */}
    </div>
    );
}




export default UserRegister;