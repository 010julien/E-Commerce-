import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Star, Clock, MapPin, Shield, 
  ChevronDown, Grid, List, TrendingUp 
} from 'lucide-react';
import { studentServices, serviceCategories } from '../../data/studentServices';
import { useTheme } from '../../contexts/ThemeContext';

const ServicesPage = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [minRating, setMinRating] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filtrer et trier les services
  const filteredServices = useMemo(() => {
    let filtered = [...studentServices];

    // Recherche
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Prix
    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Note minimum
    if (minRating > 0) {
      filtered = filtered.filter(service => service.seller.rating >= minRating);
    }

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.seller.rating - a.seller.rating;
        case 'popular':
          return b.seller.totalReviews - a.seller.totalReviews;
        default:
          return b.featured ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, minRating, sortBy]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Hero */}
      <div className={`${isDark ? 'bg-gradient-to-r from-[#283d4a] to-[#283d4a]' : 'bg-gradient-to-r from-[#1b9abe] to-[#139cbc]'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Services Étudiants</h1>
          <p className="text-xl opacity-90">
            Découvrez les talents et compétences de la communauté étudiante de Lomé
          </p>
          
          {/* Barre de recherche */}
          <div className="mt-8 max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un service (design, dev web, photo...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-lg ${
                  isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
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
                  ? 'bg-[#1b9abe] text-white shadow-lg'
                  : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Tous les services
            </button>
            {serviceCategories.map(category => (
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

              {/* Note minimum */}
              <div className="mb-6">
                <label className="block font-medium mb-2">Note minimum</label>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map(rating => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="text-[#1b9abe]"
                      />
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span>{rating}+</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Vendeurs vérifiés */}
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#1b9abe]" />
                  <Shield size={16} />
                  <span>Vendeurs vérifiés uniquement</span>
                </label>
              </div>
            </div>
          </div>

          {/* Liste des services */}
          <div className="flex-1">
            {/* Barre d'actions */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4`}>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {filteredServices.length} service(s) trouvé(s)
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Tri */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-4 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700' : 'bg-gray-100'
                  } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                >
                  <option value="featured">En vedette</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                  <option value="popular">Plus populaires</option>
                </select>

                {/* Vue */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#1b9abe] text-white' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#1b9abe] text-white' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <List size={20} />
                  </button>
                </div>

                {/* Toggle filtres mobile */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 bg-[#1b9abe] text-white rounded-lg"
                >
                  Filtres
                </button>
              </div>
            </div>

            {/* Grille de services */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} isDark={isDark} viewMode={viewMode} />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">Aucun service trouvé</p>
                <p className="text-gray-500 mt-2">Essayez de modifier vos filtres</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, isDark, viewMode }) => {
  return (
    <Link
      to={`/service/${service.id}`}
      className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} 
        rounded-lg overflow-hidden transition-all duration-300 group ${
        viewMode === 'list' ? 'flex' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64' : 'h-48'}`}>
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {service.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <TrendingUp size={14} />
            Featured
          </div>
        )}
        {service.seller.verified && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white p-1.5 rounded-full">
            <Shield size={16} />
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-4 flex-1">
        {/* Catégorie */}
        <div className="text-sm text-[#1b9abe] font-medium mb-1">
          {service.category}
        </div>

        {/* Titre */}
        <h3 className="font-bold text-lg mb-2 group-hover:text-[#1b9abe] transition-colors line-clamp-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3 line-clamp-2`}>
          {service.description}
        </p>

        {/* Vendeur */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={service.seller.avatar}
            alt={service.seller.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">{service.seller.name}</p>
            <p className="text-xs text-gray-500 truncate">{service.seller.university}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{service.seller.rating}</span>
            <span className="text-gray-500">({service.seller.totalReviews})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock size={14} />
            <span>{service.deliveryTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {service.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Prix */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-gray-500">À partir de</span>
            <div className="text-2xl font-bold text-[#1b9abe]">
              {service.price.toLocaleString()} <span className="text-sm">FCFA</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc] transition-colors">
            Voir
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServicesPage;
