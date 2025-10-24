import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ProductDetail from './components/ProductDetail';
import AuthPage from './components/AuthPage';
import UserProfile from './components/UserProfile';
import PrimeVideoPage from './components/PrimeVideoPage';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/AnimatedComponents';
import { getAllProducts } from './data/products';

function App() {
  const allProducts = getAllProducts();

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route 
                  path="/product/:id" 
                  element={
                    <ProductDetail 
                      product={allProducts.find(p => p.id === 1) || allProducts[0]} 
                    />
                  } 
                />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/prime-video" element={<PrimeVideoPage />} />
                {/* Add more routes here as needed */}
              </Routes>
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
