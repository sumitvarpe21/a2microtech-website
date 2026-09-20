import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/a2microtech-logo.jpg";

function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="A2 Microtech" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">

          <button type="button" aria-label="Search">
            <Search size={20} />
          </button>

          <button type="button" aria-label="Wishlist">
            <Heart size={20} />
          </button>

          <button type="button" aria-label="Account">
            <User size={20} />
          </button>

          {/* Cart */}
          <div className="cart-wrapper">
            <Link
              to="/cart"
              className="cart-button"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
            </Link>

            <span className="cart-count">
              {cartCount}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;