import React, { useState } from 'react';
import { MapPin, Phone, Clock, User, Navigation, Package, CheckCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { campusLocations, deliveryZones, deliveryPartners } from '../../data/campusLocations';

const CampusMapPage = () => {
  const { isDark } = useTheme();
  const [selectedCampus, setSelectedCampus] = useState(null);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero */}
      <div className={`${isDark ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-600 to-teal-600'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin size={48} />
            <h1 className="text-4xl font-bold">Points de Retrait Campus</h1>
          </div>
          <p className="text-xl text-center opacity-90">
            Récupérez vos commandes directement sur votre campus - Gratuit et pratique !
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Avantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Package, title: 'Gratuit', desc: 'Pas de frais de livraison' },
            { icon: Clock, title: 'Rapide', desc: 'Disponible sous 24-48h' },
            { icon: CheckCircle, title: 'Sécurisé', desc: 'Points de retrait vérifiés' }
          ].map((item, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 text-center shadow-lg`}>
              <item.icon className="mx-auto mb-3 text-green-600" size={40} />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Campus */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Campus Disponibles ({campusLocations.length})</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {campusLocations.map(campus => (
              <div
                key={campus.id}
                className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${
                  selectedCampus?.id === campus.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedCampus(campus)}
              >
                <img src={campus.image} alt={campus.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{campus.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{campus.address}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Package size={14} />
                      <span>{campus.pickupPoints.length} points de retrait</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{campus.students.toLocaleString()} étudiants</span>
                    </div>
                  </div>

                  {/* Points de retrait */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Points de retrait :</h4>
                    {campus.pickupPoints.map(point => (
                      <div key={point.id} className={`p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium">{point.name}</h5>
                          <MapPin size={16} className="text-green-600" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{point.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div className="flex items-center gap-2">
                            <Clock size={12} />
                            <span>{point.hours}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={12} />
                            <span>{point.contact}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User size={12} />
                            <span>Responsable: {point.manager}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Facilités */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {campus.facilities.map((facility, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zones de livraison */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Zones de Livraison à Domicile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryZones.map(zone => (
              <div key={zone.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-lg`}>
                <h3 className="font-bold mb-2">{zone.name}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {zone.areas.join(', ')}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{zone.estimatedTime}</span>
                  <span className="font-bold text-green-600">
                    {zone.deliveryFee === 0 ? 'Retrait uniquement' : `${zone.deliveryFee} FCFA`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partenaires de livraison */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Nos Partenaires de Livraison</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {deliveryPartners.map(partner => (
              <div key={partner.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{partner.name}</h3>
                  {partner.active && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs rounded-full">
                      Actif
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{partner.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Note</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle size={14} className="text-yellow-500" />
                      <span className="font-medium">{partner.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Délai</span>
                    <span className="font-medium">{partner.estimatedTime}</span>
                  </div>
                  {partner.studentDiscount && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Réduction étudiante</span>
                      <span className="font-medium text-green-600">-{partner.studentDiscount} FCFA</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment ça marche */}
        <div className={`mt-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-lg`}>
          <h2 className="text-2xl font-bold mb-6 text-center">Comment Utiliser les Points de Retrait ?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Commandez', desc: 'Passez votre commande sur Campus Market' },
              { step: '2', title: 'Choisissez', desc: 'Sélectionnez un point de retrait campus' },
              { step: '3', title: 'Recevez', desc: 'Notification SMS/Email quand c\'est prêt' },
              { step: '4', title: 'Récupérez', desc: 'Présentez votre code au point de retrait' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusMapPage;
