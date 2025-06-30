// src/pages/UserDashboard.jsx
import React, { useState } from 'react';

function UserDashboard() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane@example.com"
  });

  const [purchasedItems, setPurchasedItems] = useState([
    { id: 1, name: "Phone Case", price: 500 },
    { id: 2, name: "Sneakers", price: 2500 }
  ]);

  const [cartItems, setCartItems] = useState([
    { id: 3, name: "Bluetooth Speaker", price: 3200 },
    { id: 4, name: "Sunglasses", price: 1100 }
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div style={{ padding: '2rem', background: '#f8f8f8', minHeight: '100vh' }}>
      <h1>User Dashboard</h1>

      <section style={{ background: '#fff', padding: '1rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <h2>User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </section>

      <section style={{ background: '#fff', padding: '1rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <h2>Recently Purchased</h2>
        <ul>
          {purchasedItems.map(item => (
            <li key={item.id}>
              {item.name} – Ksh {item.price}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
        <h2>Cart Items</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} – Ksh {item.price}
              <button 
                onClick={() => removeFromCart(item.id)} 
                style={{ marginLeft: '1rem', padding: '0.25rem 0.5rem', color: 'white', backgroundColor: 'red', border: 'none', borderRadius: '5px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default UserDashboard;
