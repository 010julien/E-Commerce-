import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Crown,
  Smartphone,
  Headphones,
  Book,
  Music,
  Gamepad2,
  Cloud
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-2xl font-bold text-gradient">Cool-Chic</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre destination e-commerce pour des millions de produits avec livraison rapide et services premium.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">123 Rue du Commerce, 75001 Paris</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">contact@cool-chic.fr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Crown className="h-4 w-4 text-yellow-400" />
                  <span>Cool-Chic Prime</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Smartphone className="h-4 w-4 text-blue-400" />
                  <span>Prime Video</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Music className="h-4 w-4 text-green-400" />
                  <span>Prime Music</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Book className="h-4 w-4 text-orange-400" />
                  <span>Kindle & Audible</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Gamepad2 className="h-4 w-4 text-purple-400" />
                  <span>Prime Gaming</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Cloud className="h-4 w-4 text-cyan-400" />
                  <span>Cool-Chic Web Services</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Service Client</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Suivi de commande
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Retours & Remboursements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Livraison & Expédition
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Garanties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Entreprises</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Vendre sur Cool-Chic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cool-Chic Business
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Fulfillment by Cool-Chic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cool-Chic Ads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Programme d'affiliation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Développeurs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Restez connecté</h4>
            <p className="text-gray-300">Suivez-nous sur les réseaux sociaux pour les dernières actualités et offres</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Plan du site
              </a>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>&copy; {currentYear} Cool-Chic. Tous droits réservés.</p>
              <p className="mt-1">Développé avec ❤️ en France</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="bg-gray-700 hover:bg-gray-600 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full py-3 text-center text-white font-medium hover:text-primary-400 transition-colors"
          >
            Retour en haut
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
