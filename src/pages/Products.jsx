import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categoryFilters, products } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState("featured");

  const activeCategory = searchParams.get("category") || "All Products";

  const visibleProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All Products" || product.category === activeCategory;
      return matchesSearch && matchesCategory && product.price <= maxPrice;
    })
    .sort((a, b) =>
      sort === "low-high" ? a.price - b.price : sort === "high-low" ? b.price - a.price : 0,
    );

  const handleCategoryChange = (name) => {
    const nextParams = new URLSearchParams(searchParams);
    if (name === "All Products") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", name);
    }
    setSearchParams(nextParams);
  };

  return (
    <main className="products-page">
      <section className="products-header">
        <p>OUR STORE</p>
        <h1>{activeCategory === "All Products" ? "Electronic Components" : activeCategory}</h1>
        <p className="products-description">
          Explore electronic components, development boards, sensors, modules and accessories.
        </p>
      </section>

      <section className="products-controls">
        <div className="search-box">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button className="filter-button" type="button">
          <SlidersHorizontal size={18} />
          Filters
        </button>
        <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="featured">Sort: Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </section>

      <section className="products-content">
        <aside className="product-sidebar">
          <h3>Categories</h3>
          {categoryFilters.map((name) => (
            <button
              key={name}
              type="button"
              className={activeCategory === name ? "active-category" : ""}
              onClick={() => handleCategoryChange(name)}
            >
              {name}
            </button>
          ))}

          <div className="price-filter">
            <h3>Price</h3>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
            />
            <div className="price-values">
              <span>₹0</span>
              <span>₹{maxPrice}</span>
            </div>
          </div>
        </aside>

        <div className="catalog-grid">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try changing your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
