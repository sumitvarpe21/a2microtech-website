import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import electronicComponents from "../assets/categories/electronic-components.jpg";
import developmentBoards from "../assets/categories/development-boards.jpg";
import sensors from "../assets/categories/sensor.jpg";
import tools from "../assets/categories/tools.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/a2microtech-logo.jpg";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">A2 MICROTECH</p>

          <h1>
            Technology
            <br />
            Built for You.
          </h1>

          <p className="hero-description">
            Explore quality electronic components, technology products and
            solutions designed for modern needs.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
  Shop Products
  <ArrowRight size={18} />
</Link>

            <Link to="/products" className="secondary-button">
  Explore Categories
</Link>
          </div>
        </div>

        <div className="hero-visual">
  <div className="hero-logo-box">
    <img src={logo} alt="A2 Microtech" />
  </div>
</div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <Truck size={28} />
          <div>
            <h3>Fast Delivery</h3>
            <p>Reliable delivery across India</p>
          </div>
        </div>

        <div className="feature">
          <ShieldCheck size={28} />
          <div>
            <h3>Quality Products</h3>
            <p>Products you can rely on</p>
          </div>
        </div>

        <div className="feature">
          <Headphones size={28} />
          <div>
            <h3>Customer Support</h3>
            <p>We're here when you need us</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-heading">
          <div>
            <p>EXPLORE</p>
            <h2>Shop by Category</h2>
          </div>

          <button>
            View All <ArrowRight size={17} />
          </button>
        </div>

        <div className="category-grid">
          <Link
  to="/products?category=Electronic%20Components"
  className="category-card"
>
  <div className="category-image">
    <img
      src={electronicComponents}
      alt="Electronic Components"
    />
  </div>

  <h3>Electronic Components</h3>
</Link>

          <Link
  to="/products?category=Development%20Boards"
  className="category-card"
>
  <div className="category-image">
    <img
      src={developmentBoards}
      alt="Development Boards"
    />
  </div>

  <h3>Development Boards</h3>
</Link>

          <Link
  to="/products?category=Sensors%20%26%20Modules"
  className="category-card"
>
  <div className="category-image">
    <img
      src={sensors}
      alt="Sensors & Modules"
    />
  </div>

  <h3>Sensors & Modules</h3>
</Link>

          <Link
  to="/products?category=Tools%20%26%20Accessories"
  className="category-card"
>
  <div className="category-image">
    <img
      src={tools}
      alt="Tools & Accessories"
    />
  </div>

  <h3>Tools & Accessories</h3>
</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          <button>
            View All <ArrowRight size={17} />
          </button>
        </div>

        <div className="product-grid">
  {products.slice(0, 8).map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
      </section>
    </main>
  );
}

export default Home;