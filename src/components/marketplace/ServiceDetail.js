import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Star, Clock, Shield, Award, MapPin, MessageCircle, 
  Heart, Share2, ArrowLeft, Check, TrendingUp, Users,
  Briefcase, Calendar, DollarSign, ChevronRight
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { studentServices } from '../../data/studentServices';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const { user, isAuthenticated, addToWishlist, isInWishlist } = useAuth();
  
  const service = studentServices.find(s => s.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  if (!service) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service non trouvé</h2>
          <button 
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg"
          >
            Retour aux services
          </button>
        </div>
      </div>
    );
  }

  const relatedServices = studentServices
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      image: service.images[0],
      type: 'service',
      seller: service.seller
    });
  };

  const handleWishlist = () => {
    if (isAuthenticated) {
      addToWishlist(service.id);
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Breadcrumb */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-[#1b9abe] hover:text-[#139cbc] mb-2"
          >
            <ArrowLeft size={20} />
            Retour aux services
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1b9abe]">Accueil</Link>
            <ChevronRight size={16} />
            <Link to="/services" className="hover:text-[#1b9abe]">Services</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-white">{service.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden mb-4`}>
              <img
                src={service.images[selectedImage]}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>
            {service.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {service.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-[#1b9abe]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${service.title} ${idx + 1}`} className="w-full h-20 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Infos principales */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#daf1f4] dark:bg-[#283d4a] text-[#1b9abe] dark:text-[#9dd5e1] rounded-full text-sm font-medium">
                {service.category}
              </span>
              {service.featured && (
                <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                  <TrendingUp size={14} />
                  En vedette
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

            {/* Vendeur */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg p-4 mb-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={service.seller.avatar}
                    alt={service.seller.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">{service.seller.name}</h3>
                      {service.seller.verified && (
                        <Shield size={18} className="text-blue-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{service.seller.university}</p>
                    <p className="text-xs text-gray-500">{service.seller.faculty}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{service.seller.rating}</span>
                        <span className="text-xs text-gray-500">({service.seller.totalReviews} avis)</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.seller.completedOrders} commandes
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="px-4 py-2 border border-[#1b9abe] text-[#1b9abe] rounded-lg hover:bg-[#daf1f4] dark:hover:bg-[#283d4a]/20"
                >
                  Contacter
                </button>
              </div>
            </div>

            {/* Prix et délai */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6 shadow-lg`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Prix du service</p>
                  <p className="text-4xl font-bold text-[#1b9abe]">
                    {service.price.toLocaleString()} <span className="text-xl">FCFA</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Délai de livraison</p>
                  <p className="flex items-center gap-2 font-medium">
                    <Clock size={18} />
                    {service.deliveryTime}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-[#1b9abe] text-white rounded-lg font-bold hover:bg-[#139cbc] transition-colors flex items-center justify-center gap-2"
                >
                  <Briefcase size={20} />
                  Commander ce service
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleWishlist}
                    className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      isInWishlist(service.id)
                        ? 'bg-[#1b9abe] text-white'
                        : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <Heart size={18} className={isInWishlist(service.id) ? 'fill-current' : ''} />
                    {isInWishlist(service.id) ? 'Enregistré' : 'Favoris'}
                  </button>
                  <button
                    className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <Share2 size={18} />
                    Partager
                  </button>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <h2 className="text-2xl font-bold mb-4">Description du service</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <h3 className="text-xl font-bold mb-3">Ce qui est inclus :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5" />
                  <span>Livraison dans les délais annoncés</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5" />
                  <span>Révisions illimitées jusqu'à satisfaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5" />
                  <span>Fichiers sources fournis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5" />
                  <span>Support après livraison</span>
                </li>
              </ul>
            </div>

            {/* Avis */}
            {service.reviews && service.reviews.length > 0 && (
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                <h2 className="text-2xl font-bold mb-4">Avis clients</h2>
                <div className="space-y-4">
                  {service.reviews.map(review => (
                    <div key={review.id} className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.author}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
                      <p className="text-xs text-gray-500 mt-2">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistiques vendeur */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <h3 className="font-bold mb-4">À propos du vendeur</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Membre depuis</span>
                  <span className="font-medium">{service.seller.memberSince}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Commandes complétées</span>
                  <span className="font-medium">{service.seller.completedOrders}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Note moyenne</span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{service.seller.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Taux de réponse</span>
                  <span className="font-medium">98%</span>
                </div>
              </div>
            </div>

            {/* Services similaires */}
            {relatedServices.length > 0 && (
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                <h3 className="font-bold mb-4">Services similaires</h3>
                <div className="space-y-4">
                  {relatedServices.map(relatedService => (
                    <Link
                      key={relatedService.id}
                      to={`/service/${relatedService.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={relatedService.images[0]}
                          alt={relatedService.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm group-hover:text-[#1b9abe] line-clamp-2">
                            {relatedService.title}
                          </h4>
                          <p className="text-sm text-[#1b9abe] font-bold mt-1">
                            {relatedService.price.toLocaleString()} FCFA
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Contact */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 max-w-md w-full`}>
            <h3 className="text-xl font-bold mb-4">Contacter {service.seller.name}</h3>
            <textarea
              className={`w-full p-3 rounded-lg border ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
              rows="4"
              placeholder="Votre message..."
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowContactModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Annuler
              </button>
              <button className="flex-1 py-2 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc]">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
