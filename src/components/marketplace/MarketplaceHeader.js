import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, Menu, X, Sun, Moon, 
  MapPin, Heart, Package, Bell, Calendar, Briefcase,
  GraduationCap, TrendingUp
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import CartSidebar from '../CartSidebar';

const MarketplaceHeader = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Produits', path: '/products', icon: Package },
    { name: 'Événements', path: '/events', icon: Calendar },
    { name: 'BDE', path: '/bde', icon: TrendingUp }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} shadow-lg border-b sticky top-0 z-50`}>
        {/* Top Bar */}
        <div className="text-white text-sm" style={{ backgroundColor: isDark ? '#283d4a' : '#1b9abe' }}>
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Lomé, Togo 🇹🇬</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/become-seller" className="hover:text-[#9dd5e1] transition-colors flex items-center gap-1">
                <Package size={16} />
                Devenir vendeur
              </Link>
              <Link to="/help" className="hover:text-[#9dd5e1] transition-colors">
                Aide
              </Link>
              {isAuthenticated && (
                <Link to="/notifications" className="hover:text-[#9dd5e1] transition-colors flex items-center gap-1">
                  <Bell size={16} />
                  <span className="bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="p-2 rounded-lg" style={{ background: 'linear-gradient(to bottom right, #1b9abe, #139cbc)' }}>
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold" style={{ background: 'linear-gradient(to right, #1b9abe, #139cbc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Campus Market
                </h1>
                <p className="text-xs text-gray-500">Marketplace Étudiante Lomé</p>
              </div>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher produits, services, événements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#1b9abe] ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-lg transition-colors"
                  style={{ backgroundColor: '#1b9abe' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#139cbc'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1b9abe'}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Wishlist */}
              {isAuthenticated && (
                <Link
                  to="/wishlist"
                  className={`p-2 rounded-lg transition-colors relative ${
                    isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  {user?.wishlist?.length > 0 && (
                    <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ backgroundColor: '#1b9abe' }}>
                      {user.wishlist.length}
                    </span>
                  )}
                </Link>
              )}

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 rounded-lg transition-colors relative ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ backgroundColor: '#1b9abe' }}>
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* User Account */}
              <Link
                to={isAuthenticated ? '/profile' : '/auth'}
                className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isAuthenticated && user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                ) : (
                  <User className="h-5 w-5" />
                )}
                <div className="hidden lg:block text-left">
                  <div className="text-xs text-gray-500">
                    {isAuthenticated ? 'Bonjour' : 'Se connecter'}
                  </div>
                  <div className="text-sm font-medium">
                    {isAuthenticated ? user?.name?.split(' ')[0] : 'Mon compte'}
                  </div>
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <nav className="hidden lg:flex items-center space-x-8 py-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="flex items-center gap-2 transition-colors font-medium hover:text-[#1b9abe]"
                >
                  <category.icon size={18} />
                  {category.name}
                </Link>
              ))}
              <Link
                to="/campus-map"
                className="flex items-center gap-2 transition-colors font-medium hover:text-[#1b9abe]"
              >
                <MapPin size={18} />
                Points de retrait
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700">
            <nav className={`${isDark ? 'bg-gray-800' : 'bg-white'} px-4 py-4 space-y-2`}>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <category.icon size={18} />
                  {category.name}
                </Link>
              ))}
              <Link
                to="/campus-map"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin size={18} />
                Points de retrait
              </Link>
              {!isAuthenticated && (
                <>
                  <Link
                    to="/auth"
                    className="block px-4 py-3 text-white rounded-lg text-center font-medium"
                    style={{ backgroundColor: '#1b9abe' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/become-seller"
                    className={`block px-4 py-3 rounded-lg text-center font-medium ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Devenir vendeur
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default MarketplaceHeader;
