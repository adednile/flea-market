import ProductCard from "../components/ProductCard";
import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import "../styles/LandingPage.css";


function LandingPage(){
    const [searchTerm, setSearchTerm] = useState("");
    //sample product data
    //ADD MOCK DATA FROM HERE
    const products = [
        {
            name: "Laptop",
            image: require("../assets/tech-gadgets.png"),
            price: "KES 30,000",
            category: "Electronics"
        },
        {
            name: "Shoes",
            image: require("../assets/shoes1-0.jpg"),
            price: "KES 2,000",
            category: "Clothing"
        },
        {
          name: "Tumaini dishes",
          image: require("../assets/tumaini-dishes.jpg"),
          price: "KES 3,500",
          category: "Food"
        },
        {
          name: "Siwaka Clothes",
          image: require("../assets/maasai-wear.jpg"),
          price: "KES 2,540",
          category: "Clothing"

        },
        {
          name: "Imani Cleaners",
          image: require("../assets/house-cleaning.jpg"),
          price: "KES 4,500",
          category: "Services"
        },
        {
          name: "Madaa Pizza",
          image: require("../assets/pizza-kenya.jpg"),
          price: "KES 2,450",
          category: "Food"
        },
        {
          name: "Afro-Dishes",
          image: require("../assets/githeri.jpg"),
          price: "KES 500",
          category: "Food"
        },
        {
          name: "Campus Coffee",
          image: require("../assets/coffee-image.jpg"),
          price: "KES 750",
          category: "Food"
        },
        {
          name: "Chap Chap Tailoring",
          image: require("../assets/tailoring-services.jpeg"),
          price: "KES 5,000",
          category: "Services"
        },
        {
          name: "Kiliwomen Bags",
          image: require("../assets/women-bags.jpeg"),
          price: "KES 4,560",
          category: "Clothing"
        }




    ];
    //Filtering based on search term and category
    const [category, setCategory] = useState("All");
    const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) && (category === "All" || p.category === category));

    return(
      <div className="landing">
  <div className="landing-header">
    <h1>🛒 Strathmore Market Place</h1>
    <Link to="/vendor-register">
      <button className="sell-btn">Sell</button>
    </Link>
  </div>


    {/* Search bar */}
  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

  <div className="main-section">
    {/* FILTER BAR */}
    <aside className="filter-bar">
      <h3>Filter by Category</h3>
      <ul>
        {["All", "Electronics", "Clothing", "Food", "Services"].map((cat) => (
          <li
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>

    {/* PRODUCT GRID */}
    <section className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))
      ) : (
        <p className="no-products">No products match your search.</p>
      )}
    </section>
  </div>
</div>

    
    );
}

export default LandingPage;