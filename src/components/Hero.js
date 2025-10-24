import React from 'react';
import { ArrowRight, Truck, Shield, Crown, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Section */}
      <div className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Bienvenue sur
                  <span className="block text-yellow-300">Cool-Chic</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Des millions de produits, une livraison ultra-rapide et des services premium
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>Découvrir Prime</span>
                  <Crown className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2">
                  <span>Explorer le catalogue</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Truck className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-medium">Livraison rapide</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Shield className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-medium">Paiement sécurisé</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Crown className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-medium">Services Prime</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <Headphones className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-medium">Support 24/7</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Offre spéciale Prime</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        <span>Livraison gratuite en 1 jour</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        <span>Prime Video inclus</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        <span>Prime Music illimité</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                        <span>Prime Reading gratuit</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="text-3xl font-bold">5,99€<span className="text-lg font-normal">/mois</span></div>
                      <p className="text-blue-100 text-sm">30 jours d'essai gratuit</p>
                    </div>
                    <button className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                      Commencer l'essai gratuit
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 float-animation"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full opacity-10 float-animation" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Explorez nos catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'Livres', emoji: '📚', color: 'bg-blue-500' },
              { name: 'Mode', emoji: '👕', color: 'bg-pink-500' },
              { name: 'High-Tech', emoji: '💻', color: 'bg-purple-500' },
              { name: 'Maison', emoji: '🏠', color: 'bg-green-500' },
              { name: 'Sports', emoji: '⚽', color: 'bg-orange-500' },
              { name: 'Beauté', emoji: '💄', color: 'bg-red-500' },
              { name: 'Auto', emoji: '🚗', color: 'bg-gray-500' },
              { name: 'Jouets', emoji: '🧸', color: 'bg-yellow-500' },
            ].map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-2xl p-6 text-center text-white card-hover`}>
                  <div className="text-3xl mb-2">{category.emoji}</div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
