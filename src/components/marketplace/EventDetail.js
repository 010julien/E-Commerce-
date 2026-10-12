import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, Users, Ticket, Shield, 
  Heart, Share2, ArrowLeft, ChevronRight, Info,
  CheckCircle, Star, TrendingUp, Phone, Mail
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { bdeEvents } from '../../data/bdeEvents';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  
  const event = bdeEvents.find(e => e.id === id);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  if (!event) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Événement non trouvé</h2>
          <button 
            onClick={() => navigate('/events')}
            className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg"
          >
            Retour aux événements
          </button>
        </div>
      </div>
    );
  }

  const eventDate = new Date(event.date);
  const ticketsAvailable = event.capacity - event.soldTickets;
  const percentSold = (event.soldTickets / event.capacity) * 100;
  const isSoldOut = ticketsAvailable === 0;

  const handleReserve = () => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    if (!selectedTicket) {
      alert('Veuillez sélectionner un type de billet');
      return;
    }

    const ticket = event.tickets.find(t => t.type === selectedTicket);
    
    addToCart({
      id: `${event.id}-${selectedTicket}`,
      title: `${event.title} - ${selectedTicket}`,
      price: ticket.price,
      quantity: ticketQuantity,
      image: event.images[0],
      type: 'ticket',
      eventDate: event.date,
      eventTime: event.time,
      venue: event.venue
    });

    navigate('/checkout');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {event.featured && (
            <span className="px-4 py-2 bg-yellow-500 text-white rounded-full font-medium flex items-center gap-1">
              <TrendingUp size={16} />
              En vedette
            </span>
          )}
          {isSoldOut && (
            <span className="px-4 py-2 bg-red-500 text-white rounded-full font-medium">
              Complet
            </span>
          )}
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white text-gray-900 rounded-lg p-4 text-center shadow-xl">
          <div className="text-4xl font-bold">{eventDate.getDate()}</div>
          <div className="text-sm uppercase font-medium">
            {eventDate.toLocaleDateString('fr-FR', { month: 'short' })}
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/events')}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Retour aux événements
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Titre et catégorie */}
            <div>
              <span className="px-3 py-1 bg-[#daf1f4] dark:bg-pink-900 text-[#1b9abe] dark:text-pink-300 rounded-full text-sm font-medium">
                {event.category}
              </span>
              <h1 className="text-4xl font-bold mt-4 mb-2">{event.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>

            {/* Informations événement */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <h2 className="text-xl font-bold mb-4">Informations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={24} className="text-[#1b9abe] mt-1" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {eventDate.toLocaleDateString('fr-FR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={24} className="text-[#1b9abe] mt-1" />
                  <div>
                    <p className="font-medium">Heure</p>
                    <p className="text-gray-600 dark:text-gray-400">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={24} className="text-[#1b9abe] mt-1" />
                  <div>
                    <p className="font-medium">Lieu</p>
                    <p className="text-gray-600 dark:text-gray-400">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users size={24} className="text-[#1b9abe] mt-1" />
                  <div>
                    <p className="font-medium">Capacité</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {ticketsAvailable} places restantes sur {event.capacity}
                    </p>
                    <div className="mt-2">
                      <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className={`h-full rounded-full transition-all ${
                            percentSold >= 90 ? 'bg-red-500' : percentSold >= 70 ? 'bg-orange-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${percentSold}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{percentSold.toFixed(0)}% vendus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Organisateur */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <h2 className="text-xl font-bold mb-4">Organisé par</h2>
              <div className="flex items-center gap-4">
                <img
                  src={event.organizer.logo}
                  alt={event.organizer.name}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{event.organizer.name}</h3>
                    {event.organizer.verified && (
                      <Shield size={20} className="text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{event.organizer.university}</p>
                  {event.organizer.email && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <Mail size={16} />
                      <span>{event.organizer.email}</span>
                    </div>
                  )}
                  {event.organizer.phone && (
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <Phone size={16} />
                      <span>{event.organizer.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Points forts */}
            {event.highlights && event.highlights.length > 0 && (
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                <h2 className="text-xl font-bold mb-4">Points forts de l'événement</h2>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Autres images */}
            {event.images.length > 1 && (
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                <h2 className="text-xl font-bold mb-4">Galerie</h2>
                <div className="grid grid-cols-2 gap-4">
                  {event.images.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${event.title} ${idx + 2}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Réservation */}
          <div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-xl sticky top-4`}>
              <h3 className="text-xl font-bold mb-4">Réserver vos billets</h3>

              {/* Types de billets */}
              <div className="space-y-3 mb-6">
                {event.tickets.map((ticket, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTicket(ticket.type)}
                    disabled={ticket.available === 0}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      ticket.available === 0
                        ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-700'
                        : selectedTicket === ticket.type
                        ? 'border-[#1b9abe] bg-[#daf1f4] dark:bg-pink-900/20'
                        : isDark
                        ? 'border-gray-700 hover:border-[#1b9abe]'
                        : 'border-gray-200 hover:border-[#1b9abe]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold">{ticket.type}</span>
                      <span className="text-2xl font-bold text-[#1b9abe]">
                        {ticket.price === 0 ? 'Gratuit' : `${ticket.price.toLocaleString()} FCFA`}
                      </span>
                    </div>
                    {ticket.perks && ticket.perks.length > 0 && (
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {ticket.perks.map((perk, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <CheckCircle size={14} className="text-green-500 mt-0.5" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {ticket.available === 0 ? 'Épuisé' : `${ticket.available} disponibles`}
                    </p>
                  </button>
                ))}
              </div>

              {/* Quantité */}
              {selectedTicket && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Nombre de billets</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                      className={`px-4 py-2 rounded-lg font-bold ${
                        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={ticketQuantity}
                      onChange={(e) => setTicketQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className={`w-20 text-center py-2 rounded-lg border ${
                        isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                      }`}
                      min="1"
                    />
                    <button
                      onClick={() => setTicketQuantity(ticketQuantity + 1)}
                      className={`px-4 py-2 rounded-lg font-bold ${
                        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Total */}
              {selectedTicket && (
                <div className="mb-6 p-4 bg-[#daf1f4] dark:bg-pink-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Sous-total</span>
                    <span className="font-medium">
                      {(event.tickets.find(t => t.type === selectedTicket).price * ticketQuantity).toLocaleString()} FCFA
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-pink-200 dark:border-pink-800">
                    <span className="font-bold">Total</span>
                    <span className="text-2xl font-bold text-[#1b9abe]">
                      {(event.tickets.find(t => t.type === selectedTicket).price * ticketQuantity).toLocaleString()} FCFA
                    </span>
                  </div>
                </div>
              )}

              {/* Boutons */}
              <div className="space-y-3">
                <button
                  onClick={handleReserve}
                  disabled={isSoldOut || !selectedTicket}
                  className={`w-full py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${
                    isSoldOut || !selectedTicket
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#1b9abe] hover:bg-[#139cbc] text-white'
                  }`}
                >
                  <Ticket size={20} />
                  {isSoldOut ? 'Événement complet' : !selectedTicket ? 'Choisissez un billet' : 'Réserver maintenant'}
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button className={`py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                    <Heart size={18} />
                    Favoris
                  </button>
                  <button className={`py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                    <Share2 size={18} />
                    Partager
                  </button>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex gap-2 text-sm">
                <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-800 dark:text-blue-300">
                  Les billets seront envoyés par email après paiement. Présentez votre billet à l'entrée de l'événement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
