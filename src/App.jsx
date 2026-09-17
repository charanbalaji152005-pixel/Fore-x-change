import React from 'react';
// React Router: BrowserRouter provides the routing context, Routes & Route define individual page paths
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components: Reused across all 5 pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 5 Main Pages
import Home from './pages/Home';
import Converter from './pages/Converter';
import Rates from './pages/Rates';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

/**
 * Main Application Component
 * 
 * Beginner Concept Explanation:
 * 1. `BrowserRouter`: Connects your React app to the browser URL.
 * 2. `Navbar` & `Footer`: Placed outside <Routes>, meaning they stay visible on EVERY page.
 * 3. `<Routes>`: Acts like a switchboard - it looks at the current URL and renders only the matching `<Route>`.
 * 4. `<Route path="..." element={...} />`: Links a specific URL path to a React component.
 */
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-wrapper">
        {/* Persistent Navbar on every page */}
        <Navbar />

        {/* Page Content switches dynamically based on the current URL */}
        <main className="page-content">
          <Routes>
            {/* 1. Home Page: Dark Blue (#0d1b2a) theme with live ticker */}
            <Route path="/" element={<Home />} />

            {/* 2. Currency Converter: Green (#2e7d32) accents, light bg, NRI remittance calculator */}
            <Route path="/converter" element={<Converter />} />

            {/* 3. Exchange Rates: Purple (#6a1b9a) table header, light gray hover rows */}
            <Route path="/rates" element={<Rates />} />

            {/* 4. About: Orange (#e65100) highlights, 3-card feature grid */}
            <Route path="/about" element={<About />} />

            {/* 5. Contact: Teal (#00838f) theme with soft background & alert submit */}
            <Route path="/contact" element={<Contact />} />

            {/* Fallback route: redirects any unknown URL back to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Footer on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
