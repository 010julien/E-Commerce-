import React, { useState } from 'react';
import { 
  TrendingUp, Package, DollarSign, Star, Eye, 
  Plus, Edit, Trash2, BarChart3, Users, ShoppingBag,
  Clock, CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSeller } from '../../contexts/SellerContext';

const SellerDashboard = () => {
  const { isDark } = useTheme();
  const { currentSeller, sellerProducts, sellerServices, sellerStats } = useSeller();
  const [activeTab, setActiveTab] = useState('overview');

  if (!currentSeller) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <Package size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Devenez vendeur</h2>
          <p className="text-gray-500 mb-6">Commencez à vendre vos produits et services dès aujourd'hui</p>
          <button className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg font-medium hover:bg-[#139cbc]">
            Créer mon profil vendeur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Tableau de bord vendeur</h1>
              <p className="text-gray-500 mt-1">Bienvenue, {currentSeller.name}</p>
            </div>
            <button className="px-4 py-2 bg-[#1b9abe] text-white rounded-lg font-medium hover:bg-[#139cbc] flex items-center gap-2">
              <Plus size={20} />
              Nouveau produit
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
              { id: 'products', label: 'Produits', icon: Package },
              { id: 'services', label: 'Services', icon: ShoppingBag },
              { id: 'orders', label: 'Commandes', icon: ShoppingBag },
              { id: 'analytics', label: 'Statistiques', icon: TrendingUp }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#1b9abe] text-white'
                    : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <OverviewTab isDark={isDark} stats={sellerStats} />}
        {activeTab === 'products' && <ProductsTab isDark={isDark} products={sellerProducts} />}
        {activeTab === 'services' && <ServicesTab isDark={isDark} services={sellerServices} />}
        {activeTab === 'orders' && <OrdersTab isDark={isDark} />}
        {activeTab === 'analytics' && <AnalyticsTab isDark={isDark} stats={sellerStats} />}
      </div>
    </div>
  );
};

const OverviewTab = ({ isDark, stats }) => {
  const statsCards = [
    {
      title: 'Revenus totaux',
      value: `${stats.revenue.toLocaleString()} FCFA`,
      icon: DollarSign,
      color: 'green',
      trend: '+12%'
    },
    {
      title: 'Commandes',
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: 'blue',
      trend: '+8%'
    },
    {
      title: 'Note moyenne',
      value: stats.rating.toFixed(1),
      icon: Star,
      color: 'yellow',
      subtitle: `${stats.reviews} avis`
    },
    {
      title: 'Vues totales',
      value: '2,543',
      icon: Eye,
      color: 'purple',
      trend: '+23%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <div
            key={index}
            className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900`}>
                <stat.icon className={`text-${stat.color}-600`} size={24} />
              </div>
              {stat.trend && (
                <span className="text-green-500 text-sm font-medium flex items-center gap-1">
                  <TrendingUp size={16} />
                  {stat.trend}
                </span>
              )}
            </div>
            <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
            {stat.subtitle && (
              <p className="text-gray-500 text-sm mt-1">{stat.subtitle}</p>
            )}
          </div>
        ))}
      </div>

      {/* Commandes récentes */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
        <h2 className="text-xl font-bold mb-4">Commandes récentes</h2>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} flex items-center justify-between`}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                <div>
                  <h3 className="font-medium">Commande #{1000 + i}</h3>
                  <p className="text-sm text-gray-500">Client: Étudiant {i}</p>
                  <p className="text-sm text-gray-500">Il y a 2 heures</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{(15000 * i).toLocaleString()} FCFA</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  <Clock size={14} />
                  En attente
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductsTab = ({ isDark, products }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mes produits</h2>
        <button className="px-4 py-2 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc] flex items-center gap-2">
          <Plus size={20} />
          Ajouter un produit
        </button>
      </div>

      {products.length === 0 ? (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-12 text-center`}>
          <Package size={64} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Aucun produit</h3>
          <p className="text-gray-500 mb-6">Commencez par ajouter votre premier produit</p>
          <button className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc]">
            Ajouter un produit
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 flex items-center gap-4 shadow`}
            >
              <img src={product.image} alt={product.title} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-bold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-bold text-[#1b9abe] mt-1">{product.price.toLocaleString()} FCFA</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Edit size={18} />
                </button>
                <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ServicesTab = ({ isDark, services }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mes services</h2>
        <button className="px-4 py-2 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc] flex items-center gap-2">
          <Plus size={20} />
          Ajouter un service
        </button>
      </div>

      {services.length === 0 ? (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-12 text-center`}>
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Aucun service</h3>
          <p className="text-gray-500 mb-6">Proposez vos compétences à la communauté</p>
          <button className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc]">
            Ajouter un service
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {services.map(service => (
            <div
              key={service.id}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 flex items-center gap-4 shadow`}
            >
              <div className="flex-1">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.category}</p>
                <p className="text-lg font-bold text-[#1b9abe] mt-1">{service.price.toLocaleString()} FCFA</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Edit size={18} />
                </button>
                <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrdersTab = ({ isDark }) => {
  const orders = [
    { id: 1, status: 'pending', customer: 'Kofi M.', amount: 15000, date: '2024-11-03' },
    { id: 2, status: 'completed', customer: 'Ama D.', amount: 25000, date: '2024-11-02' },
    { id: 3, status: 'cancelled', customer: 'Edem A.', amount: 8000, date: '2024-11-01' }
  ];

  const statusConfig = {
    pending: { label: 'En attente', icon: Clock, color: 'yellow' },
    completed: { label: 'Terminée', icon: CheckCircle, color: 'green' },
    cancelled: { label: 'Annulée', icon: XCircle, color: 'red' }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mes commandes</h2>
      
      <div className="grid gap-4">
        {orders.map(order => {
          const status = statusConfig[order.status];
          return (
            <div
              key={order.id}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Commande #{order.id}</h3>
                  <p className="text-sm text-gray-500">Client: {order.customer}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#1b9abe]">{order.amount.toLocaleString()} FCFA</p>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 bg-${status.color}-100 text-${status.color}-800 rounded-full text-sm mt-2`}>
                    <status.icon size={14} />
                    {status.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AnalyticsTab = ({ isDark, stats }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Statistiques détaillées</h2>
      
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
        <h3 className="font-bold text-lg mb-4">Performances ce mois</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span>Ventes</span>
              <span className="font-bold">75%</span>
            </div>
            <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Satisfaction client</span>
              <span className="font-bold">92%</span>
            </div>
            <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span>Temps de réponse</span>
              <span className="font-bold">88%</span>
            </div>
            <div className={`h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
