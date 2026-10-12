import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Star, MapPin, Shield, TrendingUp,
  Grid, List, Package, Tag, Heart
} from 'lucide-react';
import { studentProducts, productCategories } from '../../data/studentProducts';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const ProductsPage = () => {
  const { isDark } = useTheme();
  const { isInWishlist, addToWishlist } = useAuth();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [condition, setCondition] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...studentProducts];

    // Recherche
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // État
    if (condition !== 'all') {
      filtered = filtered.filter(product => product.condition.toLowerCase().includes(condition.toLowerCase()));
    }

    // Prix
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'discount':
          return (b.discount || 0) - (a.discount || 0);
        default:
          return b.featured ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, condition, priceRange, sortBy]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Hero */}
      <div className={`${isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Produits Étudiants</h1>
          <p className="text-xl opacity-90">
            Trouvez tout ce dont vous avez besoin pour vos études
          </p>
          
          {/* Barre de recherche */}
          <div className="mt-8 max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un produit (sac, calculatrice, livres...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-lg ${
                  isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Catégories rapides */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Tous les produits
            </button>
            {productCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.name
                    ? `bg-${category.color}-600 text-white shadow-lg`
                    : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filtres sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 space-y-6`}>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Filter size={20} />
                Filtres
              </h3>

              {/* État */}
              <div className="mb-6">
                <label className="block font-medium mb-2">État</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className={`w-full p-2 rounded-lg ${
                    isDark ? 'bg-gray-700' : 'bg-gray-100'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="all">Tous</option>
                  <option value="neuf">Neuf uniquement</option>
                  <option value="occasion">Occasion uniquement</option>
                </select>
              </div>

              {/* Prix */}
              <div className="mb-6">
                <label className="block font-medium mb-2">Prix (FCFA)</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm">
                    <span>0</span>
                    <span className="font-medium">{priceRange[1].toLocaleString()} FCFA</span>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm">Promotions uniquement</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <Shield size={16} />
                  <span className="text-sm">Vendeurs vérifiés</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <MapPin size={16} />
                  <span className="text-sm">Retrait campus possible</span>
                </label>
              </div>
            </div>
          </div>

          {/* Liste des produits */}
          <div className="flex-1">
            {/* Barre d'actions */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4`}>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {filteredProducts.length} produit(s) trouvé(s)
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Tri */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700' : 'bg-gray-100'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="featured">En vedette</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="discount">Meilleure réduction</option>
                </select>

                {/* Vue */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <List size={20} />
                  </button>
                </div>

                {/* Toggle filtres mobile */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Filtres
                </button>
              </div>
            </div>

            {/* Grille de produits */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isDark={isDark} 
                  viewMode={viewMode}
                  isInWishlist={isInWishlist}
                  addToWishlist={addToWishlist}
                  addToCart={addToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package size={64} className="mx-auto text-gray-400 mb-4" />
                <p className="text-xl text-gray-400">Aucun produit trouvé</p>
                <p className="text-gray-500 mt-2">Essayez de modifier vos filtres</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, isDark, viewMode, isInWishlist, addToWishlist, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      type: 'product',
      seller: product.seller
    });
  };

  return (
    <div className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} 
      rounded-lg overflow-hidden transition-all duration-300 group ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      {/* Image */}
      <Link to={`/product/${product.id}`} className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64' : 'h-64'}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Tag size={14} />
            -{product.discount}%
          </div>
        )}
        {product.featured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white p-1.5 rounded-full">
            <TrendingUp size={16} />
          </div>
        )}
        {product.seller.verified && (
          <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-1.5 rounded-full">
            <Shield size={16} />
          </div>
        )}
        {product.stock < 5 && product.stock > 0 && (
          <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Plus que {product.stock} en stock
          </div>
        )}
      </Link>

      {/* Contenu */}
      <div className="p-4 flex-1">
        <Link to={`/product/${product.id}`}>
          {/* Catégorie */}
          <div className="text-sm text-blue-600 font-medium mb-1">
            {product.category}
          </div>

          {/* Titre */}
          <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.title}
          </h3>

          {/* Description (si liste) */}
          {viewMode === 'list' && (
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3 line-clamp-2`}>
              {product.description}
            </p>
          )}

          {/* État et seller */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs px-2 py-1 rounded-full ${
              product.condition.includes('Neuf')
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
            }`}>
              {product.condition}
            </span>
            <span className="text-xs text-gray-500">par {product.seller.name}</span>
          </div>

          {/* Livraison */}
          {product.shipping && (
            <div className="flex items-center gap-3 mb-3 text-xs">
              {product.shipping.campusPickup && (
                <span className="flex items-center gap-1 text-green-600">
                  <MapPin size={12} />
                  Retrait campus
                </span>
              )}
              {product.shipping.available && (
                <span className="text-gray-500">
                  Livraison: {product.shipping.price.toLocaleString()} FCFA
                </span>
              )}
            </div>
          )}

          {/* Prix */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            <div>
              {product.originalPrice && (
                <div className="text-sm text-gray-400 line-through">
                  {product.originalPrice.toLocaleString()} FCFA
                </div>
              )}
              <div className="text-2xl font-bold text-blue-600">
                {product.price.toLocaleString()} <span className="text-sm">FCFA</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => addToWishlist(product.id)}
                className={`p-2 rounded-lg transition-colors ${
                  isInWishlist(product.id)
                    ? 'bg-[#1b9abe] text-white'
                    : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Heart size={18} className={isInWishlist(product.id) ? 'fill-current' : ''} />
              </button>
              <button 
                onClick={handleAddToCart}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Acheter
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
