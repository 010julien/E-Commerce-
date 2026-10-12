import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { SellerProvider } from './contexts/SellerContext';
import { PaymentProvider } from './contexts/PaymentContext';
import MarketplaceHeader from './components/marketplace/MarketplaceHeader';
import MarketplaceHome from './components/marketplace/MarketplaceHome';
import ServicesPage from './components/marketplace/ServicesPage';
import ServiceDetail from './components/marketplace/ServiceDetail';
import EventsPage from './components/marketplace/EventsPage';
import EventDetail from './components/marketplace/EventDetail';
import ProductsPage from './components/marketplace/ProductsPage';
import BDEPage from './components/marketplace/BDEPage';
import CampusMapPage from './components/marketplace/CampusMapPage';
import BecomeSellerPage from './components/marketplace/BecomeSellerPage';
import SellerDashboard from './components/marketplace/SellerDashboard';
import WishlistPage from './components/marketplace/WishlistPage';
import CheckoutPage from './components/marketplace/CheckoutPage';
import HelpPage from './components/marketplace/HelpPage';
import NotificationsPage from './components/marketplace/NotificationsPage';
import SearchPage from './components/SearchPage';
import ProductDetail from './components/ProductDetail';
import AuthPage from './components/AuthPage';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/AnimatedComponents';
import { getAllProducts } from './data/products';

function App() {
  const allProducts = getAllProducts();

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <SellerProvider>
            <PaymentProvider>
              <Router>
                <div className="App min-h-screen flex flex-col">
                  <MarketplaceHeader />
                  <main className="flex-1">
                    <Routes>
                      {/* Marketplace Routes */}
                      <Route path="/" element={<MarketplaceHome />} />
                      
                      {/* Services */}
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/service/:id" element={<ServiceDetail />} />
                      
                      {/* Events */}
                      <Route path="/events" element={<EventsPage />} />
                      <Route path="/event/:id" element={<EventDetail />} />
                      
                      {/* Products */}
                      <Route path="/products" element={<ProductsPage />} />
                      <Route path="/product/:id" element={
                        <ProductDetail 
                          product={allProducts.find(p => p.id === 1) || allProducts[0]} 
                        />
                      } />
                      
                      {/* BDE & Campus */}
                      <Route path="/bde" element={<BDEPage />} />
                      <Route path="/campus-map" element={<CampusMapPage />} />
                      
                      {/* Seller */}
                      <Route path="/become-seller" element={<BecomeSellerPage />} />
                      <Route path="/seller-dashboard" element={<SellerDashboard />} />
                      
                      {/* User */}
                      <Route path="/wishlist" element={<WishlistPage />} />
                      <Route path="/checkout" element={<CheckoutPage />} />
                      <Route path="/notifications" element={<NotificationsPage />} />
                      <Route path="/auth" element={<AuthPage />} />
                      <Route path="/profile" element={<UserProfile />} />
                      
                      {/* Other */}
                      <Route path="/help" element={<HelpPage />} />
                      <Route path="/search" element={<SearchPage />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ScrollToTopButton />
                </div>
              </Router>
            </PaymentProvider>
          </SellerProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
