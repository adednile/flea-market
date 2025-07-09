// src/pages/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import NewProductCard from "../components/NewProductCard";
import Shop from "./Shop";

function UserDashboard() {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
      isLoggedIn: false
  });

    // Check if user is logged in when component mounts
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userEmail = localStorage.getItem('userEmail');

        if (!isLoggedIn || !userEmail) {
            // Redirect to login if not logged in
            navigate('/user-login');
            return;
        }

        setUser({
            email: userEmail,
            isLoggedIn: true
        });
    }, [navigate]);

    // Get cart items from localStorage
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Get purchased items from localStorage
    const [purchasedItems, setPurchasedItems] = useState(() => {
        const savedPurchases = localStorage.getItem('purchasedItems');
        return savedPurchases ? JSON.parse(savedPurchases) : [];
    });

    /*
      const [purchasedItems, setPurchasedItems] = useState([
      { id: 1,
          name: "Phone Case",
          price: "KES 500",
          image: require("../assets/tech-gadgets.png"),
          category: "Electronics"
      },
      { id: 2,
          name: "Sneakers",
          price: "KES 2500",
          image: require("../assets/shoes1-0.jpg"),
          category: "Clothing"
      }
    ]);

    const [cartItems, setCartItems] = useState([
      { id: 3,
          name: "Bluetooth Speaker",
          price: "KES 3200",
          image: require("../assets/bluetooth-speaker.jpg"),
          category: "Electronics"
      },
      { id: 4,
          name: "Sunglasses",
          price: "KES 1100",
          image: require("../assets/sunglasses.jpg"),
          category: "Clothing"
      }
    ]);
     */

    // Update localStorage whenever cart or purchased items change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
    }, [purchasedItems]);

    const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

    // To get receipt
    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            const price = parseInt(item.price.replace("KES", "").replace(",", ""));
            return total + price;
        }, 0);
    };

    const handlePayment = () => {
        // Add current cart items to purchased items
        setPurchasedItems([...purchasedItems, ...cartItems]);
        // Clear the cart
        setCartItems([]);
    };

    const formatDate = () => {
        return new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        navigate('/LandingPage');
    };

    return (
    <div style={{ padding: '2rem', background: '#f8f8f8', minHeight: '100vh' }}>
      <h1>User Dashboard</h1>
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

        <section style={{ background: '#fff', padding: '1rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <h2>User Details</h2>
        <p><strong>Email:</strong> {user.email}</p>
      </section>

        {purchasedItems.length > 0 && (
            <section style={{ background: '#fff', padding: '1rem', borderRadius: '10px', marginBottom: '2rem' }}>
                <h2>Recently Purchased</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Purchase Receipt</h3>
                    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px' }}>
                        <p><strong>Date:</strong> {formatDate()}</p>
                        {purchasedItems.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>{item.name}</span>
                                <span>{item.price}</span>
                            </div>
                        ))}
                        <div style={{ borderTop: '1px solid #ddd', marginTop: '1rem', paddingTop: '1rem' }}>
                            <strong>Total: KES {calculateTotal(purchasedItems).toLocaleString()}</strong>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                    {purchasedItems.map(item => (
                        <NewProductCard key={item.id} {...item} />
                    ))}
                </div>
            </section>
        )}

        <section style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
            <h2>Cart Items</h2>
            {cartItems.length > 0 ? (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {cartItems.map(item => (
                            <div key={item.id} style={{ position: 'relative' }}>
                                <NewProductCard {...item} />
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        padding: '0.25rem 0.5rem',
                                        color: 'white',
                                        backgroundColor: 'red',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <h3>Cart Summary</h3>
                        <div>
                            <strong>Total: KES {calculateTotal(cartItems).toLocaleString()}</strong>
                        </div>
                        <button
                            style={{
                                marginTop: '1rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            onClick={handlePayment}
                        >
                            Confirm Payment
                        </button>
                    </div>
                </>
            ) : (
                <p>Your cart is empty</p>
            )}
        </section>
    </div>
  );
}

export default UserDashboard;
