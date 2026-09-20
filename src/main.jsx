import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/products.css";
import "./styles/product-details.css";
import "./styles/cart.css";
import "./styles/checkout.css";
import "./styles/services.css";
import "./styles/about.css";
import "./styles/contact.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);