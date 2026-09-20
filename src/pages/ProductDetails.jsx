import { useParams, Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/products">
          Back to Products
        </Link>
      </main>
    );
  }

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <main className="product-details-page">

      {/* Breadcrumb */}

      <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>

        <Link to="/products">
          Products
        </Link>

        <span>/</span>

        <span>{product.name}</span>
      </div>

      {/* Main Product */}

      <section className="product-details">

        {/* Product Image */}

        <div className="product-details-image">
  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
    />
  ) : (
    <span>Product Image</span>
  )}
</div>

        {/* Product Information */}

        <div className="product-details-info">

          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          {/* Brand */}

          <p className="product-brand">
            Brand: <strong>{product.brand}</strong>
          </p>

          {/* Price */}

          <div className="product-price-section">

            <span className="current-price">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <>
                <span className="old-price">
                  ₹{product.oldPrice}
                </span>

                <span className="discount-badge">
                  {discount}% OFF
                </span>
              </>
            )}

          </div>

          {/* Description */}

          <p className="product-details-description">
            {product.description}
          </p>

          {/* Stock */}

          <div className="stock-status">
            <Check size={16} />

            <span>
              {product.stock > 0
                ? `${product.stock} items in stock`
                : "Out of Stock"}
            </span>
          </div>

          {/* Quantity */}

          <div className="quantity-section">

            <span>Quantity</span>

            <div className="quantity-control">

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(1, quantity - 1)
                  )
                }
              >
                <Minus size={16} />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(
                    Math.min(
                      product.stock,
                      quantity + 1
                    )
                  )
                }
              >
                <Plus size={16} />
              </button>

            </div>
          </div>

          {/* Actions */}

          <div className="product-actions">

            <button
              className="add-to-cart"
              disabled={product.stock === 0}
              onClick={() =>
                addToCart(product, quantity)
              }
            >
              <ShoppingCart size={19} />

              {product.stock > 0
                ? "Add to Cart"
                : "Out of Stock"}
            </button>

            <button className="wishlist-detail">
              <Heart size={20} />
            </button>

          </div>

          {/* Product Information */}

          <div className="product-extra">

            <div>
              <strong>SKU</strong>
              <span>{product.sku}</span>
            </div>

            <div>
              <strong>Category</strong>
              <span>{product.category}</span>
            </div>

            <div>
              <strong>Brand</strong>
              <span>{product.brand}</span>
            </div>

            <div>
              <strong>Availability</strong>

              <span>
                {product.stock > 0
                  ? "In Stock"
                  : "Out of Stock"}
              </span>
            </div>

            <div>
              <strong>Delivery</strong>
              <span>Available across India</span>
            </div>

          </div>

        </div>
      </section>

      {/* Specifications */}

      <section className="product-specifications">

        <h2>Specifications</h2>

        <div className="specifications-table">

          {Object.entries(product.specifications).map(
            ([key, value]) => (
              <div
                className="specification-row"
                key={key}
              >
                <strong>{key}</strong>

                <span>{value}</span>
              </div>
            )
          )}

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;