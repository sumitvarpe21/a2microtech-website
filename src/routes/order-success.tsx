import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleCheckBig, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/order-success")({
  head: () => ({
    meta: [
      { title: "Order Confirmed — A2 Microtech" },
      {
        name: "description",
        content: "Your A2 Microtech order has been received successfully.",
      },
      { property: "og:title", content: "Order Confirmed — A2 Microtech" },
      {
        property: "og:description",
        content: "Your A2 Microtech order has been received successfully.",
      },
    ],
  }),
  component: OrderSuccess,
});

function OrderSuccess() {
  const orderNumber = `A2-${Date.now().toString().slice(-6)}`;

  return (
    <main className="order-success-page">
      <div className="order-success-card">
        <div className="success-icon">
          <CircleCheckBig size={55} />
        </div>
        <p className="success-label">ORDER CONFIRMED</p>
        <h1>Thank You for Your Order!</h1>
        <p className="success-message">
          Your order has been received successfully. We will contact you with the order details
          and delivery information.
        </p>
        <div className="order-number">
          <span>Order Number</span>
          <strong>{orderNumber}</strong>
        </div>
        <div className="success-actions">
          <Link to="/products" className="continue-shopping">
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>
          <Link to="/" className="back-home">
            Back to Home
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
