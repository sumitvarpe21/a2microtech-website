import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>
          <p>
            You haven't added any products to your cart yet.
          </p>

          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p>SHOPPING CART</p>
        <h1>Your Cart</h1>
      </div>

      <section className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
  {item.image ? (
    <img
      src={item.image}
      alt={item.name}
    />
  ) : (
    <span>Product Image</span>
  )}
</div>

              <div className="cart-item-info">
                <p>{item.category}</p>
                <h3>{item.name}</h3>
                <strong>₹{item.price}</strong>
              </div>

              <div className="cart-item-quantity">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  <Minus size={15} />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  <Plus size={15} />
                </button>
              </div>

              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>

              <button
                className="remove-cart-item"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <Link to="/checkout" className="checkout-button">
  Proceed to Checkout
  <ArrowRight size={18} />
</Link>

          <Link
            to="/products"
            className="continue-shopping-link"
          >
            Continue Shopping
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default Cart;