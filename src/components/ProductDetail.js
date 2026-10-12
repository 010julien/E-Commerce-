import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw, 
  Crown,
  Plus,
  Minus,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  // Mock additional images
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  // Mock reviews
  const reviews = [
    {
      id: 1,
      author: "Marie L.",
      rating: 5,
      date: "15 mars 2024",
      title: "Excellent produit !",
      content: "Très satisfaite de cet achat. La qualité est au rendez-vous et la livraison a été rapide.",
      verified: true,
    },
    {
      id: 2,
      author: "Pierre M.",
      rating: 4,
      date: "10 mars 2024",
      title: "Bon rapport qualité-prix",
      content: "Produit conforme à la description. Quelques petits défauts mais rien de rédhibitoire.",
      verified: true,
    },
    {
      id: 3,
      author: "Sophie D.",
      rating: 5,
      date: "5 mars 2024",
      title: "Je recommande",
      content: "Parfait ! Exactement ce que je cherchais. L'emballage était soigné.",
      verified: false,
    },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <a href="#" className="hover:text-primary-600">Accueil</a>
          <span>/</span>
          <a href="#" className="hover:text-primary-600">{product.brand}</a>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Image Navigation */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg">
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
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
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index 
                      ? 'border-primary-600' 
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand and Title */}
            <div>
              {product.brand && (
                <p className="text-primary-600 font-medium mb-2">{product.brand}</p>
              )}
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="font-medium text-gray-900 dark:text-white ml-2">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  ({product.reviewCount} avis)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {product.price.toFixed(2)}€
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    -{discountPercentage}%
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Prix TTC, livraison incluse
              </p>
            </div>

            {/* Prime Benefits */}
            {product.isPrime && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-900 dark:text-blue-100">
                    Avantages Prime
                  </span>
                </div>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Livraison GRATUITE et rapide</li>
                  <li>• Retours gratuits</li>
                  <li>• Support prioritaire</li>
                </ul>
              </div>
            )}

            {/* Delivery Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Livraison {product.isPrime ? 'GRATUITE' : 'dès 4,99€'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.isPrime ? 'Demain avant 13h' : '3-5 jours ouvrés'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Livrer à Paris 75001
                  </p>
                  <button className="text-sm text-primary-600 hover:underline">
                    Changer l'adresse
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {product.inStock ? 'En stock' : 'Rupture de stock'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.inStock ? 'Expédié par Cool-Chic' : 'Bientôt disponible'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900 dark:text-white">Quantité:</span>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Ajouter au panier</span>
                </button>
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Garantie 2 ans</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Retours 30j</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-[#1b9abe] mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900 dark:text-white">Support 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Caractéristiques' },
                { id: 'reviews', label: `Avis (${reviews.length})` },
                { id: 'shipping', label: 'Livraison' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {selectedTab === 'description' && (
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            )}

            {selectedTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Caractéristiques principales
                  </h4>
                  <ul className="space-y-2">
                    {product.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Spécifications techniques
                  </h4>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Marque:</dt>
                      <dd className="font-medium text-gray-900 dark:text-white">{product.brand}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Modèle:</dt>
                      <dd className="font-medium text-gray-900 dark:text-white">2024</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600 dark:text-gray-400">Garantie:</dt>
                      <dd className="font-medium text-gray-900 dark:text-white">2 ans</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {review.author}
                          </span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              Achat vérifié
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                      {review.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      {review.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'shipping' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Options de livraison
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Truck className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Livraison standard
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          3-5 jours ouvrés - 4,99€
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Crown className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Livraison Prime
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          1-2 jours ouvrés - Gratuite
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Politique de retour
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Vous avez 30 jours pour retourner ce produit. Les retours sont gratuits pour les membres Prime.
                  </p>
                  <button className="text-primary-600 hover:underline text-sm font-medium">
                    En savoir plus sur les retours
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
