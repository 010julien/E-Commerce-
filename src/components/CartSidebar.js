import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Truck, Crown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 25 ? 0 : 4.99;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Panier ({items.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Votre panier est vide
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Découvrez nos produits et ajoutez-les à votre panier
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  Continuer mes achats
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2">
                        {item.name}
                      </h4>
                      {item.brand && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.brand}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900 dark:text-white">
                          {(item.price * item.quantity).toFixed(2)}€
                        </span>
                        {item.isPrime && (
                          <div className="flex items-center space-x-1 text-xs text-blue-600">
                            <Crown className="h-3 w-3" />
                            <span>Prime</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full text-center text-red-600 hover:text-red-700 text-sm font-medium py-2"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </div>

          {/* Footer - Summary and Checkout */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
              {/* Shipping Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {shipping === 0 ? 'Livraison GRATUITE' : `Livraison: ${shipping.toFixed(2)}€`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    Livraison gratuite dès 25€ d'achat
                  </p>
                )}
              </div>

              {/* Price Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg text-primary-600">
                      {total.toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Passer la commande
              </button>

              {/* Continue Shopping */}
              <button
                onClick={onClose}
                className="w-full text-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium py-2"
              >
                Continuer mes achats
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
