import React, { useState } from 'react';
import { 
  Bell, Package, DollarSign, Heart, MessageCircle, 
  TrendingUp, CheckCircle, XCircle, Clock, Trash2
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const NotificationsPage = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: '1',
      type: 'order',
      icon: Package,
      color: 'blue',
      title: 'Commande expédiée',
      message: 'Votre commande #1234 a été expédiée et arrivera bientôt',
      time: 'Il y a 2 heures',
      read: false,
      link: '/orders/1234'
    },
    {
      id: '2',
      type: 'payment',
      icon: DollarSign,
      color: 'green',
      title: 'Paiement reçu',
      message: 'Vous avez reçu 15,000 FCFA pour votre service de design',
      time: 'Il y a 5 heures',
      read: false,
      link: '/seller-dashboard'
    },
    {
      id: '3',
      type: 'like',
      icon: Heart,
      color: 'pink',
      title: 'Nouveau favori',
      message: 'Votre service "Design de Logo" a été ajouté aux favoris',
      time: 'Il y a 1 jour',
      read: true,
      link: '/service/srv001'
    },
    {
      id: '4',
      type: 'message',
      icon: MessageCircle,
      color: 'purple',
      title: 'Nouveau message',
      message: 'Kofi Mensah vous a envoyé un message concernant votre commande',
      time: 'Il y a 1 jour',
      read: true,
      link: '/messages'
    },
    {
      id: '5',
      type: 'promo',
      icon: TrendingUp,
      color: 'yellow',
      title: 'Nouvelle promotion',
      message: '-20% sur tous les produits de papeterie ce week-end !',
      time: 'Il y a 2 jours',
      read: true,
      link: '/products?category=Fournitures'
    },
    {
      id: '6',
      type: 'success',
      icon: CheckCircle,
      color: 'green',
      title: 'Vérification réussie',
      message: 'Votre compte vendeur a été vérifié avec succès',
      time: 'Il y a 3 jours',
      read: true,
      link: '/seller-dashboard'
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter);

  const markAllAsRead = () => {
    // Logic to mark all as read
    console.log('Mark all as read');
  };

  const deleteNotification = (id) => {
    // Logic to delete notification
    console.log('Delete notification', id);
  };

  const iconColor = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900',
      green: 'text-green-600 bg-green-100 dark:bg-green-900',
      pink: 'text-[#1b9abe] bg-[#daf1f4] dark:bg-pink-900',
      purple: 'text-[#1b9abe] bg-[#daf1f4] dark:bg-[#283d4a]',
      yellow: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Notifications</h1>
            <p className="text-gray-500">
              {unreadCount > 0 ? `${unreadCount} non lue(s)` : 'Toutes les notifications lues'}
            </p>
          </div>
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 text-[#1b9abe] hover:bg-[#daf1f4] dark:hover:bg-[#283d4a]/20 rounded-lg font-medium"
          >
            Tout marquer comme lu
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'Toutes', count: notifications.length },
            { id: 'unread', label: 'Non lues', count: unreadCount },
            { id: 'order', label: 'Commandes' },
            { id: 'payment', label: 'Paiements' },
            { id: 'message', label: 'Messages' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                filter === f.id
                  ? 'bg-[#1b9abe] text-white'
                  : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              {f.label}
              {f.count !== undefined && (
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {f.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notifications list */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-12 text-center`}>
              <Bell size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Aucune notification</h3>
              <p className="text-gray-500">Vous êtes à jour !</p>
            </div>
          ) : (
            filteredNotifications.map(notification => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-sm hover:shadow-md transition-all ${
                    !notification.read ? 'border-l-4 border-[#1b9abe]' : ''
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-full ${iconColor(notification.color)} flex-shrink-0`}>
                      <Icon size={24} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold">{notification.title}</h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#1b9abe] rounded-full flex-shrink-0 mt-2" />
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{notification.time}</span>
                        </div>
                        {notification.link && (
                          <a href={notification.link} className="text-[#1b9abe] hover:underline">
                            Voir détails
                          </a>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex-shrink-0"
                    >
                      <Trash2 size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Load more */}
        {filteredNotifications.length > 0 && (
          <div className="mt-6 text-center">
            <button className={`px-6 py-3 rounded-lg font-medium ${
              isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            }`}>
              Charger plus
            </button>
          </div>
        )}

        {/* Settings */}
        <div className={`mt-8 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
          <h3 className="font-bold text-lg mb-4">Paramètres de notifications</h3>
          <div className="space-y-3">
            {[
              { label: 'Notifications push', checked: true },
              { label: 'Emails de notifications', checked: true },
              { label: 'SMS pour commandes importantes', checked: false },
              { label: 'Nouveautés et promotions', checked: true }
            ].map((setting, index) => (
              <label key={index} className="flex items-center justify-between cursor-pointer">
                <span>{setting.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={setting.checked}
                  className="w-5 h-5 text-[#1b9abe] rounded"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
