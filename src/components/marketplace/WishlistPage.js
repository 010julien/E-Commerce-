import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, Share2, Package } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { studentServices } from '../../data/studentServices';
import { studentProducts } from '../../data/studentProducts';

const WishlistPage = () => {
  const { isDark } = useTheme();
  const { user, isAuthenticated, removeFromWishlist } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <Heart size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Connectez-vous pour voir vos favoris</h2>
          <button 
            onClick={() => navigate('/auth')}
            className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  const wishlistItems = [
    ...studentServices.filter(s => user?.wishlist?.includes(s.id)),
    ...studentProducts.filter(p => user?.wishlist?.includes(p.id))
  ];

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.images[0],
      type: item.category.includes('Service') ? 'service' : 'product'
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Ma Liste de Souhaits</h1>
            <p className="text-gray-500">{wishlistItems.length} article(s) dans vos favoris</p>
          </div>
          <Heart size={48} className="text-[#1b9abe] fill-current" />
        </div>

        {wishlistItems.length === 0 ? (
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-12 text-center`}>
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Votre liste est vide</h2>
            <p className="text-gray-500 mb-6">Ajoutez des produits et services à vos favoris</p>
            <div className="flex gap-4 justify-center">
              <Link to="/services" className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg">
                Explorer les services
              </Link>
              <Link to="/products" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
                Explorer les produits
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map(item => (
              <div key={item.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg group`}>
                <Link to={item.category.includes('Service') ? `/service/${item.id}` : `/product/${item.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromWishlist(item.id);
                      }}
                      className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-white rounded-full text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-[#1b9abe] font-medium mb-1">
                      {item.category}
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#1b9abe]">
                      {item.title}
                    </h3>
                    <p className="text-2xl font-bold text-[#1b9abe] mb-4">
                      {item.price.toLocaleString()} <span className="text-sm">FCFA</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(item);
                        }}
                        className="flex-1 py-2 bg-[#1b9abe] text-white rounded-lg hover:bg-[#139cbc] flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={18} />
                        Ajouter
                      </button>
                      <button className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
