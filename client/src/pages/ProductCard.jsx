import React from 'react';

function ProductCard({ name, image, price, category }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            background: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <img
                src={image}
                alt={name}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }}
            />
            <h3 style={{ margin: '0.5rem 0' }}>{name}</h3>
            <p style={{ color: '#666' }}>{category}</p>
            <p style={{
                fontWeight: 'bold',
                color: '#2c3e50',
                marginTop: '0.5rem'
            }}>
                {price}
            </p>
        </div>
    );
}

export default ProductCard;