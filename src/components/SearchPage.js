import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal, Star, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { getAllProducts } from '../data/products';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [isPrimeOnly, setIsPrimeOnly] = useState(false);

  const allProducts = getAllProducts();
  
  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'electronics', label: 'High-Tech' },
    { value: 'fashion', label: 'Mode' },
    { value: 'home', label: 'Maison & Jardin' },
    { value: 'books', label: 'Livres' },
    { value: 'sports', label: 'Sports & Loisirs' },
  ];

  const brands = [...new Set(allProducts.map(product => product.brand).filter(Boolean))];

  const sortOptions = [
    { value: 'relevance', label: 'Pertinence' },
    { value: 'price-low', label: 'Prix croissant' },
    { value: 'price-high', label: 'Prix décroissant' },
    { value: 'rating', label: 'Meilleures notes' },
    { value: 'newest', label: 'Nouveautés' },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      // Search query
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.brand?.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Price range
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Rating
      if (product.rating < minRating) {
        return false;
      }

      // Prime only
      if (isPrimeOnly && !product.isPrime) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedBrands, minRating, sortBy, isPrimeOnly]);

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Search Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filtres</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* Prime Filter */}
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isPrimeOnly}
                    onChange={(e) => setIsPrimeOnly(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Prime uniquement
                  </span>
                </label>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Prix</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Marques</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-900 dark:text-white">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Note minimum</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <div className="flex items-center space-x-1">
                        {renderStars(rating)}
                        <span className="text-sm text-gray-600 dark:text-gray-400">& plus</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Résultats de recherche
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {filteredProducts.length} produit(s) trouvé(s)
                  {searchQuery && ` pour "${searchQuery}"`}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtres</span>
                </button>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
