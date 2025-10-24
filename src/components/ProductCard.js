import React from 'react';
import { Star, Heart, ShoppingCart, Truck, Shield } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product, featured = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`card card-hover group ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className={`relative ${featured ? 'h-64 lg:h-80' : 'h-48'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.isPrime && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                Prime
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                Nouveau
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors opacity-0 group-hover:opacity-100">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Ajouter au panier</span>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Brand */}
          {product.brand && (
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {product.brand}
            </p>
          )}

          {/* Title */}
          <h3 className={`font-semibold text-gray-900 dark:text-white line-clamp-2 ${
            featured ? 'text-lg' : 'text-sm'
          }`}>
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className={`font-bold text-gray-900 dark:text-white ${
                featured ? 'text-xl' : 'text-lg'
              }`}>
                {product.price.toFixed(2)}€
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice.toFixed(2)}€
                </span>
              )}
            </div>
            {product.isPrime && (
              <div className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                <Truck className="h-3 w-3" />
                <span>Livraison GRATUITE</span>
              </div>
            )}
          </div>

          {/* Features */}
          {product.features && (
            <div className="space-y-1">
              {product.features.slice(0, featured ? 3 : 2).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Shipping Info */}
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span>Garantie 2 ans</span>
            </div>
            {product.inStock ? (
              <span className="text-green-600 dark:text-green-400 font-medium">
                En stock
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400 font-medium">
                Rupture de stock
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
