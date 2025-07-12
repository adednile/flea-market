/**
 * ProductCard component displays a product's image, name, price, and category in a styled card.
 * Includes a 'Buy Now' button that links to user registration.
 *
 * @component
 * @param {Object} props
 * @param {string} props.image - Image URL of the product.
 * @param {string} props.name - Name of the product.
 * @param {string} props.price - Price of the product.
 * @param {string} props.category - Category of the product.
 * @returns {JSX.Element} The rendered product card.
 */
import { Link } from "react-router"
import "../styles/ProductCard.css";

function ProductCard({ image, name, price, category }){
    return(
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            <div className="product-content">
                <h3>{name}</h3>
                <p className="product-category">{category}</p>
                <p className="product-price">{price}</p>
                <Link to="/user-register">
                    <button className="buy-btn">Buy Now</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;