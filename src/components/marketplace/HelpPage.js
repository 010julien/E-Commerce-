import React, { useState } from 'react';
import { 
  HelpCircle, Search, MessageCircle, Mail, Phone, 
  ChevronDown, ChevronUp, Book, Shield, CreditCard,
  Package, MapPin, Users
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const HelpPage = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqCategories = [
    {
      id: 'general',
      title: 'Questions Générales',
      icon: HelpCircle,
      questions: [
        {
          q: 'Qu\'est-ce que Campus Market ?',
          a: 'Campus Market est une marketplace dédiée aux étudiants de Lomé. Vous pouvez acheter et vendre des produits, services et billets d\'événements entre étudiants.'
        },
        {
          q: 'Comment créer un compte ?',
          a: 'Cliquez sur "Se connecter" en haut à droite, puis "S\'inscrire". Remplissez le formulaire avec votre email universitaire pour bénéficier de tous les avantages.'
        },
        {
          q: 'Campus Market est-il gratuit ?',
          a: 'Oui, l\'inscription et la navigation sont 100% gratuites. Les vendeurs paient une petite commission de 5% sur leurs ventes.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Paiement & Sécurité',
      icon: CreditCard,
      questions: [
        {
          q: 'Quels moyens de paiement acceptez-vous ?',
          a: 'Nous acceptons Flooz, T-Money, cartes bancaires via FedaPay, et paiement en espèces à la livraison pour certains produits.'
        },
        {
          q: 'Le paiement est-il sécurisé ?',
          a: 'Oui, tous les paiements sont sécurisés par FedaPay avec cryptage SSL. Vos informations bancaires ne sont jamais stockées sur nos serveurs.'
        },
        {
          q: 'Y a-t-il des frais de transaction ?',
          a: 'Oui, des frais minimes s\'appliquent : 1% pour Flooz/T-Money, 2.5% pour carte bancaire, 0% pour espèces.'
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Livraison & Retrait',
      icon: Package,
      questions: [
        {
          q: 'Comment fonctionne le retrait sur campus ?',
          a: 'Choisissez un point de retrait lors de la commande. Vous recevrez un SMS quand votre colis est prêt. Présentez votre code au point de retrait pour récupérer votre commande.'
        },
        {
          q: 'Combien coûte la livraison ?',
          a: 'Le retrait sur campus est gratuit. La livraison à domicile coûte entre 1,000 et 2,000 FCFA selon votre zone.'
        },
        {
          q: 'Quels sont les délais de livraison ?',
          a: 'Pour le retrait campus : 24-48h. Pour la livraison à domicile : 48-72h selon votre zone.'
        }
      ]
    },
    {
      id: 'seller',
      title: 'Devenir Vendeur',
      icon: Users,
      questions: [
        {
          q: 'Comment devenir vendeur ?',
          a: 'Cliquez sur "Devenir vendeur", remplissez le formulaire et téléchargez votre carte étudiante. Votre compte sera vérifié sous 24-48h.'
        },
        {
          q: 'Quelle commission prenez-vous ?',
          a: 'Nous prenons une commission de 5% sur chaque vente. C\'est tout ! Pas de frais cachés.'
        },
        {
          q: 'Comment recevoir mes paiements ?',
          a: 'Les paiements sont transférés sur votre compte Flooz/T-Money ou compte bancaire sous 3-5 jours après confirmation de livraison.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Confiance & Sécurité',
      icon: Shield,
      questions: [
        {
          q: 'Comment vérifiez-vous les vendeurs ?',
          a: 'Tous les vendeurs doivent fournir leur carte étudiante et numéro de téléphone togolais. Nous vérifions chaque document manuellement.'
        },
        {
          q: 'Que faire en cas de problème avec une commande ?',
          a: 'Contactez notre support via le chat ou email support@campusmarket.tg. Nous médions tous les litiges et protégeons les deux parties.'
        },
        {
          q: 'Comment signaler un vendeur suspect ?',
          a: 'Cliquez sur "Signaler" sur le profil du vendeur et décrivez le problème. Nous enquêtons sous 24h.'
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero */}
      <div className={`${isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Centre d'Aide</h1>
          <p className="text-xl opacity-90 mb-8">
            Comment pouvons-nous vous aider aujourd'hui ?
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-lg ${
                isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:support@campusmarket.tg"
            className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} rounded-lg p-6 text-center shadow-lg transition-all`}
          >
            <Mail className="mx-auto mb-3 text-blue-600" size={40} />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">support@campusmarket.tg</p>
          </a>

          <a
            href="tel:+22890000000"
            className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} rounded-lg p-6 text-center shadow-lg transition-all`}
          >
            <Phone className="mx-auto mb-3 text-green-600" size={40} />
            <h3 className="font-bold text-lg mb-2">Téléphone</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">+228 90 00 00 00</p>
          </a>

          <button className={`${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} rounded-lg p-6 text-center shadow-lg transition-all`}>
            <MessageCircle className="mx-auto mb-3 text-[#1b9abe]" size={40} />
            <h3 className="font-bold text-lg mb-2">Chat en direct</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Disponible 8h-20h</p>
          </button>
        </div>

        {/* FAQ Categories */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Questions Fréquentes</h2>
          <div className="space-y-6">
            {faqCategories.map((category, catIndex) => (
              <div key={category.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const faqId = `${catIndex}-${qIndex}`;
                    const isOpen = openFaq === faqId;
                    
                    return (
                      <div key={qIndex} className={`border rounded-lg ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <button
                          onClick={() => toggleFaq(faqId)}
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <span className="font-medium text-left">{faq.q}</span>
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-3 text-gray-600 dark:text-gray-400">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
            <Book className="mb-3 text-blue-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Guides Utilisateur</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tutoriels complets pour bien démarrer sur Campus Market
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Voir les guides →
            </button>
          </div>

          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
            <Shield className="mb-3 text-green-600" size={40} />
            <h3 className="text-xl font-bold mb-2">Politiques & CGU</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Conditions d'utilisation et politiques de confidentialité
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Lire les politiques →
            </button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-12 ${isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} text-white rounded-lg p-8 text-center`}>
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-lg opacity-90 mb-6">
            Notre équipe est là pour vous aider
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
