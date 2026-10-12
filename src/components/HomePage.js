import React from 'react';
import Hero from './Hero';
import ProductSection from './ProductSection';
import { featuredProducts, bestSellers, newArrivals, fashionProducts, homeProducts } from '../data/products';
import { AnimatedStats, FadeInOnScroll } from './AnimatedComponents';
import { Truck, Shield, RotateCcw, Headphones, Crown, Play } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Services Banner */}
      <div className="bg-white dark:bg-gray-800 py-8 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                <Truck className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Livraison rapide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gratuite dès 25€</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Paiement sécurisé</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">SSL 256 bits</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                <RotateCcw className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Retours gratuits</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">30 jours</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#daf1f4] dark:bg-[#283d4a] p-3 rounded-full">
                <Headphones className="h-6 w-6 text-[#1b9abe]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Support 24/7</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <FadeInOnScroll>
        <ProductSection 
          title="Produits en vedette" 
          products={featuredProducts} 
          featured={true}
        />
      </FadeInOnScroll>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Prime Video Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Crown className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold">Prime Video</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Films, séries et contenus originaux
              </h2>
              <p className="text-xl text-blue-100">
                Découvrez des milliers de films et séries, y compris des productions originales primées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Regarder maintenant</span>
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-full h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold">The Boys</h4>
                    <p className="text-sm text-blue-100">Série originale</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-full h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold">Jack Ryan</h4>
                    <p className="text-sm text-blue-100">Action & Thriller</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold">The Marvelous Mrs. Maisel</h4>
                    <p className="text-sm text-blue-100">Comédie</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-full h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold">The Wheel of Time</h4>
                    <p className="text-sm text-blue-100">Fantasy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <ProductSection 
        title="Meilleures ventes" 
        products={bestSellers}
      />

      {/* New Arrivals */}
      <ProductSection 
        title="Nouveautés" 
        products={newArrivals}
      />

      {/* Fashion Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <ProductSection 
          title="Mode & Style" 
          products={fashionProducts}
        />
      </div>

      {/* Home & Garden */}
      <ProductSection 
        title="Maison & Jardin" 
        products={homeProducts}
      />

      {/* Newsletter Section */}
      <div className="bg-gray-900 dark:bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé des dernières offres</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter et recevez les meilleures offres, nouveautés et promotions exclusives directement dans votre boîte mail.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              S'inscrire
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Nous respectons votre vie privée. Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
