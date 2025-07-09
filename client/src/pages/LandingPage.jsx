import NewProductCard from "../components/NewProductCard";
import { Link, useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import "../styles/LandingPage.css";


function LandingPage(){
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    // Check login status on component mount
    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        const email = localStorage.getItem('userEmail');
        setIsLoggedIn(loginStatus);
        if (email) setUserEmail(email);
    }, []);

    // Get cart items from localStorage or initialize empty array
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Handle login/logout
    const handleAuthAction = () => {
        if (isLoggedIn) {
            // Handle logout
            localStorage.setItem('isLoggedIn', 'false');
            setIsLoggedIn(false);
            navigate('/LandingPage');
        } else {
            // Redirect to login page
            navigate('/user-login');
        }
    };

    // Handle cart click
    const handleCartClick = () => {
        if (isLoggedIn) {
            navigate('/user-dashboard');
        } else {
            navigate('/user-login');
        }
    };

    // Add this function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false);
        setUserEmail("");
        navigate('/LandingPage');
    };

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
    ].map((product, index) => ({...product, id: index + 1}));

    const addToCart = (product) => {
        const updatedCart = [...cartItems];
        const existingProduct = updatedCart.find(item => item.id === product.id);

        if (!existingProduct) {
            updatedCart.push({
                ...product,
                quantity: 1
            });
            setCartItems(updatedCart);
            // Save to localStorage
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        }
    };

    //Filtering based on search term and category
    const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) && (category === "All" || p.category === category));

    const ProductCardWithAddToCart = ({ product }) => (
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <NewProductCard {...product} />
            <button
                onClick={() => addToCart(product)}
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    opacity: cartItems.some(item => item.id === product.id) ? 0.7 : 1
                }}
                disabled={cartItems.some(item => item.id === product.id)}
            >
                {cartItems.some(item => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
            </button>
        </div>
    );

    return(
        <div className="landing">
            <div className="landing-header">
                <h1>🛒 Strathmore Market Place</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {isLoggedIn && (
                        <span style={{ color: '#666' }}>
                            Welcome, {userEmail}
                        </span>
                    )}
                    <Link to="/vendor-register">
                        <button className="sell-btn">Sell</button>
                    </Link>
                    <Link to={isLoggedIn ? "/userdashboard" : "/user-login"}>
                        <button className="cart-btn">
                            Cart ({cartItems.length})
                        </button>
                    </Link>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: '#ff4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/user-login">
                            <button
                                style={{
                                    padding: '0.5rem 1rem',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Login
                            </button>
                        </Link>
                    )}
                </div>
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
              filteredProducts.map((product) => (
                  <ProductCardWithAddToCart
                      key={product.id}
                      product={product}
                  />
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