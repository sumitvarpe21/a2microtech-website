import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-card-link"
      >
        <div className="product-image-wrapper">

          <div className="product-image">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
              />
            ) : (
              <span>Product Image</span>
            )}
          </div>

        </div>

        <div className="product-info">

          <p className="product-category">
            {product.category}
          </p>

          <h3>{product.name}</h3>

          <div className="product-bottom">
            <strong>₹{product.price}</strong>

            <span className="view-product">
              View Product
            </span>
          </div>

        </div>
      </Link>

      <button
        className="wishlist-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Heart size={18} />
      </button>

      <button
        className="add-cart-button"
        onClick={handleAddToCart}
      >
        <ShoppingCart size={17} />
        Add
      </button>

    </div>
  );
}

export default ProductCard;