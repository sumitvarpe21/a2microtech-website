import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import logo from "../assets/a2microtech-logo.jpg";
import { Link } from "react-router-dom";function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
  <img src={logo} alt="A2 Microtech" />
</Link>

        {/* Navigation */}
        <nav className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
  <Link to="/services">Services</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>

        {/* Actions */}
        <div className="nav-actions">
          <button>
            <Search size={20} />
          </button>

          <button>
            <Heart size={20} />
          </button>

          <button>
            <User size={20} />
          </button>

          <Link to="/cart" className="cart-button">
  <ShoppingCart size={20} />
  <span>{cartCount}</span>
</Link>

          <button className="mobile-menu">
            <Menu size={22} />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;