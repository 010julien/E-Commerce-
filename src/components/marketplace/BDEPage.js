import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Calendar, Trophy, Heart, TrendingUp, 
  Shield, Star, MapPin, Mail, Phone, Award
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { bdeEvents } from '../../data/bdeEvents';

const BDEPage = () => {
  const { isDark } = useTheme();

  const bdes = [
    {
      id: 'bde001',
      name: 'BDE Université de Lomé',
      logo: 'https://i.pravatar.cc/150?img=70',
      university: 'Université de Lomé',
      members: 250,
      rating: 4.8,
      events: 12,
      description: 'Le BDE de l\'UL organise les meilleurs événements pour les étudiants de Lomé !',
      email: 'bde@ul.tg',
      phone: '+228 90 00 00 00',
      verified: true
    },
    {
      id: 'bde002',
      name: 'BDE ESTBA',
      logo: 'https://i.pravatar.cc/150?img=55',
      university: 'ESTBA',
      members: 180,
      rating: 4.7,
      events: 8,
      description: 'BDE ESTBA - Innovation et technologie au service des étudiants',
      email: 'bde@estba.tg',
      phone: '+228 91 11 11 11',
      verified: true
    },
    {
      id: 'bde003',
      name: 'BDE Université de Kara',
      logo: 'https://i.pravatar.cc/150?img=63',
      university: 'Université de Kara',
      members: 150,
      rating: 4.6,
      events: 6,
      description: 'Votre BDE à Kara pour des événements inoubliables',
      email: 'bde@uk.tg',
      phone: '+228 92 22 22 22',
      verified: true
    }
  ];

  const upcomingEvents = bdeEvents.slice(0, 6);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero */}
      <div className={`${isDark ? 'bg-gradient-to-r from-[#283d4a] to-[#283d4a]' : 'bg-gradient-to-r from-[#1b9abe] to-[#139cbc]'} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Trophy size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Bureaux des Étudiants (BDE)</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Découvrez les BDE et associations étudiantes de Lomé. 
            Participez aux événements, rejoignez les activités et soutenez votre campus !
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'BDE Actifs', value: '3+', icon: Users },
            { label: 'Événements/mois', value: '15+', icon: Calendar },
            { label: 'Étudiants participants', value: '1000+', icon: Heart },
            { label: 'Satisfaction', value: '4.7/5', icon: Star }
          ].map((stat, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 text-center shadow-lg`}>
              <stat.icon className="mx-auto mb-3 text-[#1b9abe]" size={32} />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Liste des BDE */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">BDE Vérifiés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bdes.map(bde => (
              <div key={bde.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <img src={bde.logo} alt={bde.name} className="w-20 h-20 rounded-full" />
                  {bde.verified && (
                    <Shield size={24} className="text-blue-500" />
                  )}
                </div>
                
                <h3 className="font-bold text-xl mb-2">{bde.name}</h3>
                <p className="text-gray-500 mb-4">{bde.university}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{bde.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Membres</span>
                    <span className="font-medium">{bde.members}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Événements</span>
                    <span className="font-medium">{bde.events}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Note</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{bde.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    <span>{bde.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} />
                    <span>{bde.phone}</span>
                  </div>
                </div>

                <button className="w-full py-2 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc] font-medium">
                  Voir les événements
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Événements à venir */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Événements à Venir</h2>
            <Link to="/events" className="text-[#1b9abe] font-medium hover:underline">
              Voir tous les événements
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map(event => {
              const eventDate = new Date(event.date);
              return (
                <Link
                  key={event.id}
                  to={`/event/${event.id}`}
                  className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group`}
                >
                  <div className="relative h-48">
                    <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute top-2 right-2 bg-white text-gray-900 rounded-lg p-2 text-center">
                      <div className="text-2xl font-bold">{eventDate.getDate()}</div>
                      <div className="text-xs uppercase">{eventDate.toLocaleDateString('fr-FR', { month: 'short' })}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-[#1b9abe] font-medium mb-1">{event.category}</div>
                    <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-[#1b9abe]">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={14} />
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-12 ${isDark ? 'bg-gradient-to-r from-[#283d4a] to-[#283d4a]' : 'bg-gradient-to-r from-[#1b9abe] to-[#139cbc]'} text-white rounded-lg p-12 text-center`}>
          <Award size={64} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Vous êtes un BDE ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Rejoignez Campus Market pour organiser vos événements et vendre vos billets en ligne !
          </p>
          <button className="px-8 py-4 bg-white text-[#1b9abe] rounded-lg font-bold hover:bg-gray-100">
            Créer un compte BDE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BDEPage;
