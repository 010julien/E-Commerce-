import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  GraduationCap,
  Package,
  Calendar,
  Briefcase,
  HelpCircle,
  Shield,
  TrendingUp
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: isDark ? '#283d4a' : '#1b9abe' }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #1b9abe, #139cbc)' }}>
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Campus Market</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              La marketplace étudiante de référence à Lomé. Achetez et vendez entre étudiants en toute sécurité.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#9dd5e1]" />
                <span className="text-gray-200">Université de Lomé, Togo 🇹🇬</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#9dd5e1]" />
                <span className="text-gray-200">+228 90 00 00 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#9dd5e1]" />
                <span className="text-gray-200">contact@campusmarket.tg</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <Briefcase className="h-4 w-4 text-[#9dd5e1]" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <Package className="h-4 w-4 text-[#9dd5e1]" />
                  <span>Produits</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <Calendar className="h-4 w-4 text-[#9dd5e1]" />
                  <span>Événements</span>
                </Link>
              </li>
              <li>
                <Link to="/bde" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <TrendingUp className="h-4 w-4 text-[#9dd5e1]" />
                  <span>BDE</span>
                </Link>
              </li>
              <li>
                <Link to="/campus-map" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <MapPin className="h-4 w-4 text-[#9dd5e1]" />
                  <span>Points de retrait</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Service Client</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <HelpCircle className="h-4 w-4 text-[#9dd5e1]" />
                  <span>Centre d'aide</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-200 hover:text-white transition-colors">
                  Mes commandes
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-200 hover:text-white transition-colors">
                  Ma wishlist
                </Link>
              </li>
              <li>
                <Link to="/campus-map" className="text-gray-200 hover:text-white transition-colors">
                  Points de retrait
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="text-gray-200 hover:text-white transition-colors">
                  Notifications
                </Link>
              </li>
              <li>
                <a href="mailto:support@campusmarket.tg" className="text-gray-200 hover:text-white transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Vendeurs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Vendeurs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/become-seller" className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors">
                  <Shield className="h-4 w-4 text-[#9dd5e1]" />
                  <span>Devenir vendeur</span>
                </Link>
              </li>
              <li>
                <Link to="/seller-dashboard" className="text-gray-200 hover:text-white transition-colors">
                  Dashboard vendeur
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Guide du vendeur
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Politiques de vente
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Frais et paiements
                </a>
              </li>
              <li>
                <Link to="/bde" className="text-gray-200 hover:text-white transition-colors">
                  Créer un compte BDE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: isDark ? '#139cbc40' : '#9dd5e160' }}>
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Restez connecté</h4>
            <p className="text-gray-200">Suivez Campus Market sur les réseaux sociaux</p>
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
      <div className="border-t" style={{ backgroundColor: isDark ? '#1b1f24' : '#139cbc', borderColor: isDark ? '#139cbc40' : '#9dd5e160' }}>
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
            <div className="text-sm text-gray-200 text-center md:text-right">
              <p>&copy; {currentYear} Campus Market. Tous droits réservés.</p>
              <p className="mt-1">Fait avec ❤️ pour les étudiants de Lomé 🇹🇬</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="transition-colors" style={{ backgroundColor: isDark ? '#283d4a' : '#139cbc' }}>
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full py-3 text-center text-white font-medium transition-colors"
            style={{ hover: { color: '#9dd5e1' } }}
          >
            ↑ Retour en haut
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
