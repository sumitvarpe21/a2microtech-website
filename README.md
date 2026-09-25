# A2 Microtech Website

A recreation of the A2 Microtech website — electronic components, development
boards, sensors and technology solutions — built with React, TanStack Start
(TanStack Router), TypeScript and Tailwind CSS.

## Run locally in VS Code

### 1. Prerequisites

Install Node.js (version 20 or newer recommended) from
[https://nodejs.org](https://nodejs.org), or use
[nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### 2. Open the project

1. Extract this ZIP to a folder.
2. Open that folder in VS Code (**File → Open Folder…**).

### 3. Install dependencies

Open the VS Code terminal (**Terminal → New Terminal**) and run:

```sh
npm install
```

### 4. Start the dev server

```sh
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173` or
`http://localhost:8080`) in your browser.

### 5. Build for production

```sh
npm run build
```

The production build is written to the `dist` / `.output` folders.

## Project structure

- `src/routes/` — all pages (Home, Products, Product Details, Services, About,
  Contact, Cart, Checkout, Order Success)
- `src/data/products.ts` — centralized product catalog
- `src/context/CartContext.tsx` — cart state, persisted to localStorage
- `src/components/` — Navbar, ProductCard and shared UI
- `public/assets/` — product and category images, logo
