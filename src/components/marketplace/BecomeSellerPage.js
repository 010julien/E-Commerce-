import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Store, TrendingUp, DollarSign, Users, Shield, 
  CheckCircle, Upload, Camera, Package, Award, Sparkles
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSeller } from '../../contexts/SellerContext';
import { useAuth } from '../../contexts/AuthContext';

const BecomeSellerPage = () => {
  const { isDark } = useTheme();
  const { becomeSeller } = useSeller();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shopName: '',
    description: '',
    category: '',
    phone: '',
    whatsapp: '',
    studentId: '',
    idCardFront: null,
    idCardBack: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    const sellerData = {
      ...formData,
      userId: user?.id,
      name: formData.shopName,
      email: user?.email,
      university: user?.university
    };

    becomeSeller(sellerData);
    navigate('/seller-dashboard');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#283d4a]' : 'bg-[#daf1f4]'}`}>
      {/* Hero */}
      <div style={{ background: isDark ? 'linear-gradient(135deg, #283d4a 0%, #139cbc 100%)' : 'linear-gradient(135deg, #1b9abe 0%, #139cbc 100%)' }} className="text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Store size={64} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Devenez Vendeur sur Campus Market</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Vendez vos produits et services à des milliers d'étudiants. 
            Commencez à gagner de l'argent dès aujourd'hui !
          </p>
          <div className="flex items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle size={24} />
              <span>Inscription gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={24} />
              <span>Commission 5%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={24} />
              <span>Paiements sécurisés</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Avantages */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, title: '2,500+ Clients', desc: 'Accédez à toute la communauté étudiante', color: '#1b9abe' },
            { icon: DollarSign, title: 'Commissions Basses', desc: 'Seulement 5% par transaction', color: '#139cbc' },
            { icon: TrendingUp, title: 'Vendez Plus', desc: 'Augmentez vos revenus facilement', color: '#1b9abe' },
            { icon: Shield, title: '100% Sécurisé', desc: 'Paiements protégés et garantis', color: '#139cbc' }
          ].map((item, index) => (
            <div key={index} className={`${isDark ? 'bg-[#283d4a]' : 'bg-white'} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border ${isDark ? 'border-[#139cbc]/20' : 'border-[#9dd5e1]/30'}`}>
              <div className={`inline-flex p-3 rounded-full mb-4`} style={{ backgroundColor: isDark ? `${item.color}20` : `${item.color}15` }}>
                <item.icon style={{ color: item.color }} size={40} />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Formulaire */}
        <div className="max-w-3xl mx-auto">
          <div className={`${isDark ? 'bg-[#283d4a]' : 'bg-white'} rounded-xl shadow-2xl p-8 border ${isDark ? 'border-[#139cbc]/20' : 'border-[#9dd5e1]/30'}`}>
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map(num => (
                <div key={num} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    step >= num ? 'text-white shadow-lg' : isDark ? 'bg-[#283d4a] border-2 border-[#139cbc]/30' : 'bg-[#daf1f4] border-2 border-[#9dd5e1]'
                  }`} style={step >= num ? { backgroundColor: '#1b9abe' } : {}}>
                    {step > num ? <CheckCircle size={24} /> : num}
                  </div>
                  {num < 3 && <div className={`h-1 w-16 md:w-32 transition-all ${step > num ? '' : isDark ? 'bg-[#283d4a]' : 'bg-[#9dd5e1]'}`} style={step > num ? { backgroundColor: '#1b9abe' } : {}} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Informations de base</h2>
                  
                  <div>
                    <label className="block font-medium mb-2">Nom de votre boutique/service *</label>
                    <input
                      type="text"
                      required
                      value={formData.shopName}
                      onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        isDark ? 'bg-[#283d4a] border-[#139cbc]/30 text-white' : 'bg-white border-[#9dd5e1]'
                      } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                      placeholder="Ex: Design Pro by Kofi"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">Description *</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        isDark ? 'bg-[#283d4a] border-[#139cbc]/30 text-white' : 'bg-white border-[#9dd5e1]'
                      } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                      placeholder="Décrivez vos produits/services..."
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">Catégorie principale *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        isDark ? 'bg-[#283d4a] border-[#139cbc]/30 text-white' : 'bg-white border-[#9dd5e1]'
                      } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                    >
                      <option value="">Choisissez une catégorie</option>
                      <option value="services">Services</option>
                      <option value="products">Produits</option>
                      <option value="both">Services et Produits</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Contact</h2>
                  
                  <div>
                    <label className="block font-medium mb-2">Numéro de téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        isDark ? 'bg-[#283d4a] border-[#139cbc]/30 text-white' : 'bg-white border-[#9dd5e1]'
                      } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                      placeholder="+228 90 00 00 00"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">WhatsApp (optionnel)</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        isDark ? 'bg-[#283d4a] border-[#139cbc]/30 text-white' : 'bg-white border-[#9dd5e1]'
                      } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                      placeholder="+228 90 00 00 00"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">Numéro carte étudiante *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                      className={`w-full p-3 rounded-lg border transition-all ${
                        isDark ? 'bg-[#283d4a] border-[#139cbc]/30 text-white' : 'bg-white border-[#9dd5e1]'
                      } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                      placeholder="EX123456"
                    />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Vérification</h2>
                  
                  <div className="space-y-4">
                    <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      isDark ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      <Camera className="mx-auto mb-3 text-gray-400" size={48} />
                      <h3 className="font-medium mb-2">Carte étudiante (Recto)</h3>
                      <p className="text-sm text-gray-500 mb-4">Photo claire de votre carte</p>
                      <input type="file" accept="image/*" className="hidden" id="idFront" />
                      <label htmlFor="idFront" className="px-6 py-3 text-white rounded-lg cursor-pointer inline-flex items-center gap-2 font-medium transition-all hover:shadow-lg" style={{ backgroundColor: '#1b9abe' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#139cbc'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1b9abe'}>
                        <Upload size={18} />
                        Télécharger
                      </label>
                    </div>

                    <div className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      isDark ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      <Camera className="mx-auto mb-3 text-gray-400" size={48} />
                      <h3 className="font-medium mb-2">Carte étudiante (Verso)</h3>
                      <p className="text-sm text-gray-500 mb-4">Photo claire de votre carte</p>
                      <input type="file" accept="image/*" className="hidden" id="idBack" />
                      <label htmlFor="idBack" className="px-6 py-3 text-white rounded-lg cursor-pointer inline-flex items-center gap-2 font-medium transition-all hover:shadow-lg" style={{ backgroundColor: '#1b9abe' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#139cbc'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1b9abe'}>
                        <Upload size={18} />
                        Télécharger
                      </label>
                    </div>
                  </div>

                  <div className="rounded-lg p-4 text-sm" style={{ backgroundColor: isDark ? '#1b9abe20' : '#daf1f4' }}>
                    <p style={{ color: isDark ? '#9dd5e1' : '#283d4a' }}>
                      <strong>Note :</strong> Vos documents seront vérifiés sous 24-48h. 
                      Vous recevrez un email de confirmation une fois votre compte approuvé.
                    </p>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className={`flex-1 py-3 rounded-lg font-medium border-2 transition-all ${
                      isDark ? 'bg-[#283d4a] border-[#139cbc] text-[#9dd5e1] hover:bg-[#139cbc]/20' : 'bg-white border-[#1b9abe] text-[#1b9abe] hover:bg-[#daf1f4]'
                    }`}
                  >
                    Précédent
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex-1 py-4 text-white rounded-lg font-bold transition-all hover:shadow-lg"
                    style={{ backgroundColor: '#1b9abe' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#139cbc'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1b9abe'}
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 py-4 text-white rounded-lg font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#1b9abe' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#139cbc'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1b9abe'}
                  >
                    <CheckCircle size={20} />
                    Soumettre ma demande
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Success stories */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: isDark ? '#9dd5e1' : '#283d4a' }}>
              <Sparkles className="inline-block mr-2" size={32} />
              Ils ont réussi avec Campus Market
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Kofi M.', earning: '150,000 FCFA/mois', category: 'Design', avatar: '👨‍🎨' },
                { name: 'Aïcha T.', earning: '200,000 FCFA/mois', category: 'Dev Web', avatar: '👩‍💻' },
                { name: 'Edem A.', earning: '120,000 FCFA/mois', category: 'Photo', avatar: '📸' }
              ].map((seller, index) => (
                <div key={index} className={`${isDark ? 'bg-[#283d4a]' : 'bg-white'} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border ${isDark ? 'border-[#139cbc]/20' : 'border-[#9dd5e1]/30'}`}>
                  <div className="text-5xl mb-4">{seller.avatar}</div>
                  <h3 className="font-bold text-xl mb-1">{seller.name}</h3>
                  <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{seller.category}</p>
                  <div className="inline-block px-4 py-2 rounded-full text-white font-bold" style={{ backgroundColor: '#1b9abe' }}>
                    {seller.earning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeSellerPage;
