import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, MapPin, Users, Ticket, Clock, 
  Filter, Search, Shield, TrendingUp, CheckCircle
} from 'lucide-react';
import { bdeEvents, eventCategories } from '../../data/bdeEvents';
import { useTheme } from '../../contexts/ThemeContext';

const EventsPage = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  // Filtrer les événements
  const filteredEvents = useMemo(() => {
    let filtered = [...bdeEvents];

    // Recherche
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Date
    const today = new Date();
    if (dateFilter === 'thisWeek') {
      const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= nextWeek;
      });
    } else if (dateFilter === 'thisMonth') {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
      });
    }

    // Prix
    if (priceFilter === 'free') {
      filtered = filtered.filter(event => 
        event.tickets.some(ticket => ticket.price === 0)
      );
    } else if (priceFilter === 'paid') {
      filtered = filtered.filter(event => 
        event.tickets.every(ticket => ticket.price > 0)
      );
    }

    // Trier par date
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

    return filtered;
  }, [searchQuery, selectedCategory, dateFilter, priceFilter]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Hero */}
      <div className={`${isDark ? 'bg-gradient-to-r from-[#283d4a] to-red-900' : 'bg-gradient-to-r from-pink-600 to-red-600'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Événements & Billets BDE</h1>
          <p className="text-xl opacity-90">
            Découvrez et participez aux événements organisés par les associations étudiantes
          </p>
          
          {/* Barre de recherche */}
          <div className="mt-8 max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un événement (soirée, sport, conférence...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-lg ${
                  isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-pink-500`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filtres rapides */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 mb-6 shadow-lg`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Catégories */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-pink-500`}
            >
              <option value="all">Toutes catégories</option>
              {eventCategories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>

            {/* Date */}
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className={`px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-pink-500`}
            >
              <option value="all">Toutes dates</option>
              <option value="thisWeek">Cette semaine</option>
              <option value="thisMonth">Ce mois-ci</option>
            </select>

            {/* Prix */}
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className={`px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-pink-500`}
            >
              <option value="all">Tous les prix</option>
              <option value="free">Gratuit</option>
              <option value="paid">Payant</option>
            </select>

            {/* Résultats */}
            <div className="flex items-center justify-center font-medium">
              {filteredEvents.length} événement(s)
            </div>
          </div>
        </div>

        {/* Liste des événements */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} isDark={isDark} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-400">Aucun événement trouvé</p>
            <p className="text-gray-500 mt-2">Essayez de modifier vos filtres</p>
          </div>
        )}
      </div>
    </div>
  );
};

const EventCard = ({ event, isDark }) => {
  const eventDate = new Date(event.date);
  const ticketsAvailable = event.capacity - event.soldTickets;
  const percentSold = (event.soldTickets / event.capacity) * 100;
  const minPrice = Math.min(...event.tickets.map(t => t.price));
  const isSoldOut = ticketsAvailable === 0;

  return (
    <Link
      to={`/event/${event.id}`}
      className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} 
        rounded-lg overflow-hidden transition-all duration-300 group`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {event.featured && (
            <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <TrendingUp size={14} />
              En vedette
            </div>
          )}
          {isSoldOut && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Complet
            </div>
          )}
        </div>

        {/* Date badge */}
        <div className="absolute top-2 right-2 bg-white text-gray-900 rounded-lg p-2 text-center">
          <div className="text-2xl font-bold">{eventDate.getDate()}</div>
          <div className="text-xs uppercase">
            {eventDate.toLocaleDateString('fr-FR', { month: 'short' })}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Catégorie */}
        <div className="text-sm text-[#1b9abe] font-medium mb-1">
          {event.category}
        </div>

        {/* Titre */}
        <h3 className="font-bold text-lg mb-2 group-hover:text-[#1b9abe] transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Organisateur */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={event.organizer.logo}
            alt={event.organizer.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate flex items-center gap-1">
              {event.organizer.name}
              {event.organizer.verified && (
                <Shield size={14} className="text-blue-500" />
              )}
            </p>
            <p className="text-xs text-gray-500 truncate">{event.organizer.university}</p>
          </div>
        </div>

        {/* Infos */}
        <div className="space-y-2 mb-3 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={16} />
            <span>{eventDate.toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long' 
            })}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={16} />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Users size={16} />
            <span>{ticketsAvailable} places restantes / {event.capacity}</span>
          </div>
        </div>

        {/* Jauge de remplissage */}
        <div className="mb-3">
          <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div
              className={`h-full rounded-full transition-all ${
                percentSold >= 90 ? 'bg-red-500' : percentSold >= 70 ? 'bg-orange-500' : 'bg-green-500'
              }`}
              style={{ width: `${percentSold}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {percentSold.toFixed(0)}% de billets vendus
          </p>
        </div>

        {/* Prix et CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-sm text-gray-500">À partir de</span>
            <div className="text-2xl font-bold text-[#1b9abe]">
              {minPrice === 0 ? 'Gratuit' : (
                <>
                  {minPrice.toLocaleString()} <span className="text-sm">FCFA</span>
                </>
              )}
            </div>
          </div>
          <button 
            disabled={isSoldOut}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              isSoldOut 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#1b9abe] hover:bg-[#139cbc] text-white'
            }`}
          >
            <Ticket size={18} />
            {isSoldOut ? 'Complet' : 'Réserver'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventsPage;
