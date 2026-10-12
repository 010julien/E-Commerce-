import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, TrendingUp, Shield, Zap, Package, 
  Calendar, Briefcase, Star, ArrowRight, Users,
  GraduationCap, Heart, Award
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { studentServices } from '../../data/studentServices';
import { studentProducts } from '../../data/studentProducts';
import { bdeEvents } from '../../data/bdeEvents';

const MarketplaceHome = () => {
  const { isDark } = useTheme();

  const featuredServices = studentServices.filter(s => s.featured).slice(0, 3);
  const featuredProducts = studentProducts.filter(p => p.featured).slice(0, 4);
  const upcomingEvents = bdeEvents.filter(e => e.featured).slice(0, 3);

  const stats = [
    { label: 'Étudiants actifs', value: '2,500+', icon: Users },
    { label: 'Vendeurs vérifiés', value: '150+', icon: Shield },
    { label: 'Services proposés', value: '300+', icon: Briefcase },
    { label: 'Note moyenne', value: '4.8/5', icon: Star }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Vendeurs Vérifiés',
      description: 'Tous nos vendeurs sont des étudiants vérifiés',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Livraison Rapide',
      description: 'Retrait sur campus ou livraison express',
      color: 'yellow'
    },
    {
      icon: Heart,
      title: 'Communauté',
      description: 'Soutenez l\'économie étudiante locale',
      color: 'pink'
    },
    {
      icon: Award,
      title: 'Qualité Garantie',
      description: 'Système de notation et avis clients',
      color: 'green'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`${isDark ? 'bg-gradient-to-br from-[#283d4a] via-pink-900 to-indigo-900' : 'bg-gradient-to-br from-[#1b9abe] via-pink-600 to-indigo-600'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles size={20} />
                <span className="text-sm font-medium">Marketplace #1 des étudiants à Lomé</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Votre Campus, Votre Marketplace
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Achetez, vendez et échangez produits, services et billets d'événements entre étudiants de Lomé. 
                Rejoignez la communauté Campus Market !
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-[#1b9abe] rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl"
                >
                  Explorer les Services
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/become-seller"
                  className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-all"
                >
                  Devenir Vendeur
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
                  alt="Étudiants"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#daf1f4]0 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#daf1f4]0 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl text-center`}
            >
              <stat.icon className="mx-auto mb-3 text-[#1b9abe]" size={32} />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Campus Market ?</h2>
          <p className="text-xl text-gray-500">La plateforme pensée pour les étudiants, par des étudiants</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900 flex items-center justify-center mb-4`}>
                <feature.icon className={`text-${feature.color}-600`} size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Services Populaires</h2>
            <p className="text-gray-500">Découvrez les talents de la communauté étudiante</p>
          </div>
          <Link
            to="/services"
            className="flex items-center gap-2 text-[#1b9abe] font-medium hover:gap-3 transition-all"
          >
            Voir tout
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} isDark={isDark} />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Produits en Vedette</h2>
              <p className="text-gray-500">Les meilleures offres du moment</p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-2 text-[#1b9abe] font-medium hover:gap-3 transition-all"
            >
              Voir tout
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Événements à Venir</h2>
            <p className="text-gray-500">Ne manquez aucun événement étudiant</p>
          </div>
          <Link
            to="/events"
            className="flex items-center gap-2 text-[#1b9abe] font-medium hover:gap-3 transition-all"
          >
            Voir tout
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} isDark={isDark} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`${isDark ? 'bg-gradient-to-br from-[#283d4a] to-[#283d4a]' : 'bg-gradient-to-br from-[#1b9abe] to-[#139cbc]'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <GraduationCap size={64} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui utilisent déjà Campus Market pour vendre leurs produits et services.
          </p>
          <Link
            to="/become-seller"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1b9abe] rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl"
          >
            Devenir Vendeur
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, isDark }) => (
  <Link
    to={`/service/${service.id}`}
    className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group`}
  >
    <div className="relative h-48 overflow-hidden">
      <img src={service.images[0]} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
      <div className="absolute top-2 right-2 bg-blue-500 text-white p-1.5 rounded-full">
        <Shield size={16} />
      </div>
    </div>
    <div className="p-4">
      <div className="text-sm text-[#1b9abe] font-medium mb-1">{service.category}</div>
      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-[#1b9abe]">{service.title}</h3>
      <div className="flex items-center gap-2 mb-3">
        <img src={service.seller.avatar} alt={service.seller.name} className="w-6 h-6 rounded-full" />
        <span className="text-sm text-gray-500">{service.seller.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-sm">{service.seller.rating}</span>
        </div>
        <div className="text-xl font-bold text-[#1b9abe]">
          {service.price.toLocaleString()} <span className="text-sm">FCFA</span>
        </div>
      </div>
    </div>
  </Link>
);

const ProductCard = ({ product, isDark }) => (
  <Link
    to={`/product/${product.id}`}
    className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group`}
  >
    <div className="relative h-48 overflow-hidden">
      <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
      {product.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
          -{product.discount}%
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-[#1b9abe]">{product.title}</h3>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs px-2 py-1 bg-[#daf1f4] text-[#1b9abe] rounded-full">{product.condition}</span>
      </div>
      <div className="flex items-center justify-between">
        {product.originalPrice ? (
          <div>
            <div className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString()} FCFA</div>
            <div className="text-xl font-bold text-[#1b9abe]">{product.price.toLocaleString()} FCFA</div>
          </div>
        ) : (
          <div className="text-xl font-bold text-[#1b9abe]">{product.price.toLocaleString()} FCFA</div>
        )}
      </div>
    </div>
  </Link>
);

const EventCard = ({ event, isDark }) => {
  const eventDate = new Date(event.date);
  const minPrice = Math.min(...event.tickets.map(t => t.price));
  
  return (
    <Link
      to={`/event/${event.id}`}
      className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
        <div className="absolute top-2 right-2 bg-white text-gray-900 rounded-lg p-2 text-center">
          <div className="text-2xl font-bold">{eventDate.getDate()}</div>
          <div className="text-xs uppercase">{eventDate.toLocaleDateString('fr-FR', { month: 'short' })}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-[#1b9abe] font-medium mb-1">{event.category}</div>
        <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-[#1b9abe]">{event.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar size={14} />
          <span>{eventDate.toLocaleDateString('fr-FR')}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#1b9abe]">
            {minPrice === 0 ? 'Gratuit' : `${minPrice.toLocaleString()} FCFA`}
          </div>
          <div className="text-sm text-gray-500">{event.capacity - event.soldTickets} places</div>
        </div>
      </div>
    </Link>
  );
};

export default MarketplaceHome;
