import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
const [searchParams, setSearchParams] =
  useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "All Products"
  );

  const [maxPrice, setMaxPrice] = useState(2000);

  const [sortOption, setSortOption] = useState("featured");

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;

      const matchesPrice = product.price <= maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      if (sortOption === "low-high") {
        return a.price - b.price;
      }

      if (sortOption === "high-low") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <main className="products-page">

      {/* Page Header */}
      <section className="products-header">
        <p>OUR STORE</p>

        <h1>
          {selectedCategory === "All Products"
            ? "Electronic Components"
            : selectedCategory}
        </h1>

        <p className="products-description">
          Explore electronic components, development
          boards, sensors, modules and accessories.
        </p>
      </section>

      {/* Search & Controls */}
      <section className="products-controls">

        <div className="search-box">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <button className="filter-button">
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <select
          className="sort-select"
          value={sortOption}
          onChange={(e) =>
            setSortOption(e.target.value)
          }
        >
          <option value="featured">
            Sort: Featured
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>
        </select>

      </section>

      {/* Product Area */}
      <section className="products-content">

        {/* Categories */}
        <aside className="product-sidebar">

          <h3>Categories</h3>

          {[
            "All Products",
            "Electronic Components",
            "Development Boards",
            "Sensors & Modules",
            "Motors",
            "LEDs",
            "Resistors",
            "Displays",
            "Tools & Accessories",
          ].map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active-category"
                  : ""
              }
              onClick={() => {
  setSelectedCategory(category);

  if (category === "All Products") {
    setSearchParams({});
  } else {
    setSearchParams({
      category: category,
    });
  }
}}
            >
              {category}
            </button>
          ))}

          {/* Price Filter */}
          <div className="price-filter">

            <h3>Price</h3>

            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
            />

            <div className="price-values">
              <span>₹0</span>
              <span>₹{maxPrice}</span>
            </div>

          </div>

        </aside>

        {/* Products */}
        <div className="catalog-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="no-products">

              <h3>No products found</h3>

              <p>
                Try changing your search or filters.
              </p>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Products;