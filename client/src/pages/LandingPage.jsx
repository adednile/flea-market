import ProductCard from "../components/ProductCard";
import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import { useState } from "react";


function LandingPage(){
    const [searchTerm, setSearchTerm] = useState("");
    //sample product data
    //ADD MOCK DATA FROM HERE
    const products = [
        {
            name: "Laptop",
            image: require("../assets/tech-gadgets.png"),
            price: "KES 30,000"
        },
        {
            name: "Shoes",
            image: require("../assets/shoes1-0.jpg"),
            price: "KES 2,000"
        },
        {
          name: "Tumaini dishes",
          image: require("../assets/tumaini-dishes.jpg"),
          price: "KES 3,500"
        },
        {
          name: "Siwaka Clothes",
          image: require("../assets/maasai-wear.jpg"),
          price: "KES 2,540"

        },
        {
          name: "Imani Cleaners",
          image: require("../assets/house-cleaning.jpg"),
          price: "KES 4,500"
        },
        {
          name: "Madaa Pizza",
          image: require("../assets/pizza-kenya.jpg"),
          price: "KES /==="
        },
        {
          name: "Afro-Dishes",
          image: require("../assets/githeri.jpg"),
          price: "KES /==="
        },
        {
          name: "Campus Coffee",
          image: require("../assets/coffee-image.jpg"),
          price: "KES /==="
        },
        {
          name: "Chap Chap Tailoring",
          image: require("../assets/tailoring-services.jpeg"),
          price: "KES /==="
        },
        {
          name: "Kiliwomen Bags",
          image: require("../assets/women-bags.jpeg"),
          price: "KES /==="
        }




    ];
    //Filtering based on search term
    const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <div>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <h1>🛒 Strathmore Market Place</h1>
        <Link to="/vendor-register">
          <button style={{ padding: "0.5rem 1rem" }}>Sell</button>
        </Link>
      </header>

      {/* Search bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      

      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, idx) => (
            <ProductCard key={idx} name={p.name} image={p.image} price={p.price} />
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "gray" }}>No products match your search.</p>
        )}
      </section>

        </div>
      
    </div>
        

    
    );
}

export default LandingPage;