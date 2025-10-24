import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import CartSidebar from './CartSidebar';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Sun,
  Moon,
  MapPin,
  Heart,
  Package,
  Crown,
} from 'lucide-react';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    'Tous les départements',
    'Livres',
    'Vêtements',
    'High-Tech',
    'Maison & Jardin',
    'Sports & Loisirs',
    'Beauté & Santé',
    'Alimentation',
    'Automobile',
    'Jeux & Jouets',
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 dark:bg-gray-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Livrer à Paris 75001</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Service Client
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Vendre sur Cool-Chic
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Retours & Commandes
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h1 className="text-2xl font-bold text-gradient hidden sm:block">
                Cool-Chic
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl mx-4 hidden md:block">
            <div className="flex">
              <select className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Rechercher Cool-Chic.fr"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-lg transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Prime */}
            <div className="hidden lg:flex items-center space-x-1 text-sm">
              <Crown className="h-4 w-4 text-yellow-500" />
              <span className="font-medium">Prime</span>
            </div>

            {/* Account */}
            <div className="hidden md:flex flex-col text-sm">
              <span className="text-gray-600 dark:text-gray-400">Bonjour, Connexion</span>
              <span className="font-medium">Comptes et listes</span>
            </div>

            {/* Wishlist */}
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
              <Heart className="h-5 w-5" />
            </button>

            {/* Orders */}
            <div className="hidden md:flex flex-col text-sm">
              <span className="text-gray-600 dark:text-gray-400">Retours</span>
              <span className="font-medium">et Commandes</span>
            </div>

            {/* Cart */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Rechercher Cool-Chic.fr"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-800 dark:bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 py-2 overflow-x-auto">
            <a href="#" className="flex items-center space-x-1 hover:text-primary-400 transition-colors whitespace-nowrap">
              <Menu className="h-4 w-4" />
              <span>Tous</span>
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Meilleures Ventes
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Nouveautés
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Prime Video
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Kindle
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Audible
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Mode
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              High-Tech
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Maison
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              Services
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Tous les départements
            </a>
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Meilleures Ventes
            </a>
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Nouveautés
            </a>
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Prime Video
            </a>
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Kindle
            </a>
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Comptes et listes
            </a>
            <a href="#" className="block py-2 hover:text-primary-600 transition-colors">
              Retours et Commandes
            </a>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
