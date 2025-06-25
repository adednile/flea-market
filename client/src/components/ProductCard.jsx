import { Link } from "react-router"

function ProductCard({ image, name, price }){
    return(
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img src={image} alt={name} style={styles.image} />
            </div>
            <div style={styles.content}>
                <h3 style={styles.name}>{name}</h3>
                <p style={styles.price}>{price}</p>
                <Link to="/user-register" style={styles.linkWrapper}>
                    <button style={styles.button}>
                        <span style={styles.buttonText}>Buy Now</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "1rem",
        margin: "1rem",
        width: "240px",
        textAlign: "center",
        gap: "20px",
        backgroundColor: "#ffffff",
        transition: "all 0.3s ease",
        overflow: "hidden",
        cursor: "pointer",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    imageContainer: {
        width: "100%",
        height: "180px",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease",
    },
    content: {
        padding: "1.25rem",
        textAlign: "center",
    },
    name: {
        fontSize: "1.1rem",
        fontWeight: "600",
        color: "#2c3e50",
        margin: "0 0 0.75rem 0",
        lineHeight: "1.3",
    },
    price: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#e74c3c",
        margin: "0 0 1.25rem 0",
        letterSpacing: "0.5px",
    },
    linkWrapper: {
        textDecoration: "none",
        width: "100%",
    },
    button: {
        width: "100%",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "0.95rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        boxShadow: "0 2px 4px rgba(52, 152, 219, 0.3)",
    },
    buttonText: {
        display: "inline-block",
        transition: "transform 0.2s ease",
    }
};

export default ProductCard;