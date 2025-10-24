import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Package, 
  Heart, 
  Settings, 
  Bell, 
  Shield, 
  Crown,
  Edit3,
  Save,
  X,
  Truck,
  Star,
  Calendar,
  Award
} from 'lucide-react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Marie',
    lastName: 'Dubois',
    email: 'marie.dubois@email.com',
    phone: '+33 1 23 45 67 89',
    address: '123 Rue de la Paix, 75001 Paris',
    birthDate: '1990-05-15'
  });

  const tabs = [
    { id: 'profile', name: 'Profil', icon: User },
    { id: 'orders', name: 'Commandes', icon: Package },
    { id: 'wishlist', name: 'Liste d\'envies', icon: Heart },
    { id: 'addresses', name: 'Adresses', icon: MapPin },
    { id: 'payments', name: 'Paiements', icon: CreditCard },
    { id: 'settings', name: 'Paramètres', icon: Settings },
  ];

  const orders = [
    {
      id: 'CMD-2024-001',
      date: '2024-03-15',
      status: 'Livré',
      total: 299.99,
      items: [
        { name: 'MacBook Pro 14"', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 'CMD-2024-002',
      date: '2024-03-10',
      status: 'En transit',
      total: 149.99,
      items: [
        { name: 'AirPods Pro', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 'CMD-2024-003',
      date: '2024-03-05',
      status: 'Préparation',
      total: 79.99,
      items: [
        { name: 'Kindle Paperwhite', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop' }
      ]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1479.00,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop',
      inStock: true
    },
    {
      id: 2,
      name: 'Sony WH-1000XM5',
      price: 399.00,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
      inStock: true
    },
    {
      id: 3,
      name: 'Nintendo Switch OLED',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop',
      inStock: false
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save user info logic here
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Livré': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'En transit': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      case 'Préparation': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {userInfo.firstName[0]}{userInfo.lastName[0]}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {userInfo.firstName} {userInfo.lastName}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">{userInfo.email}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                    Membre Prime
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Membre depuis
              </div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Janvier 2020
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Informations personnelles
                    </h2>
                    <button
                      onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                      className="flex items-center space-x-2 btn-primary"
                    >
                      {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
                      <span>{isEditing ? 'Enregistrer' : 'Modifier'}</span>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        value={userInfo.firstName}
                        onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        value={userInfo.lastName}
                        onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        value={userInfo.address}
                        onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Date de naissance
                      </label>
                      <input
                        type="date"
                        value={userInfo.birthDate}
                        onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Mes commandes
                  </h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Commande {order.id}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Passée le {new Date(order.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                              {order.total.toFixed(2)}€
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-3 mt-4">
                          <button className="btn-primary text-sm">
                            Suivre la commande
                          </button>
                          <button className="btn-secondary text-sm">
                            Voir les détails
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Ma liste d'envies
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {item.name}
                        </h3>
                        <p className="text-lg font-bold text-primary-600 mb-3">
                          {item.price.toFixed(2)}€
                        </p>
                        <div className="flex space-x-2">
                          <button 
                            disabled={!item.inStock}
                            className="flex-1 btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {item.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
                          </button>
                          <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Paramètres du compte
                  </h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              Notifications
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Gérer les notifications par email et push
                            </p>
                          </div>
                        </div>
                        <button className="btn-secondary text-sm">
                          Configurer
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              Sécurité
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Mot de passe et authentification à deux facteurs
                            </p>
                          </div>
                        </div>
                        <button className="btn-secondary text-sm">
                          Modifier
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Crown className="h-5 w-5 text-yellow-500" />
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              Abonnement Prime
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Gérer votre abonnement Prime
                            </p>
                          </div>
                        </div>
                        <button className="btn-secondary text-sm">
                          Gérer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
