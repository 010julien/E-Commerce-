import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, Smartphone, Wallet, MapPin, 
  CheckCircle, AlertCircle, Lock, ArrowLeft
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { usePayment } from '../../contexts/PaymentContext';

const CheckoutPage = () => {
  const { isDark } = useTheme();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { availablePaymentMethods, initiatePayment, calculateFees } = usePayment();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('flooz');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('campus');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [processing, setProcessing] = useState(false);

  if (!isAuthenticated) {
    navigate('/auth');
    return null;
  }

  if (cartItems.length === 0) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <AlertCircle size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#1b9abe] text-white rounded-lg"
          >
            Continuer mes achats
          </button>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const fees = calculateFees(paymentMethod, subtotal);
  const deliveryFee = deliveryOption === 'home' ? 1500 : 0;
  const total = subtotal + fees + deliveryFee;

  const handlePayment = async () => {
    setProcessing(true);
    
    try {
      const paymentData = {
        method: paymentMethod,
        amount: total,
        orderId: `ORD${Date.now()}`,
        phoneNumber: phoneNumber,
        description: `Commande Campus Market - ${cartItems.length} articles`
      };

      const result = await initiatePayment(paymentData);
      
      if (result.status === 'success') {
        clearCart();
        navigate('/order-confirmation', { state: { orderId: result.id } });
      }
    } catch (error) {
      alert('Erreur lors du paiement. Veuillez réessayer.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#1b9abe] hover:text-[#139cbc] mb-6"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        <h1 className="text-4xl font-bold mb-8">Finaliser ma commande</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Livraison */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-[#1b9abe] text-white' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  1
                </div>
                <h2 className="text-xl font-bold">Livraison</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-[#1b9abe] transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value="campus"
                      checked={deliveryOption === 'campus'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="text-[#1b9abe]"
                    />
                    <MapPin size={24} className="text-green-600" />
                    <div className="flex-1">
                      <div className="font-bold">Retrait sur campus</div>
                      <div className="text-sm text-gray-500">Gratuit - Disponible sous 24-48h</div>
                    </div>
                    <div className="font-bold text-green-600">Gratuit</div>
                  </label>
                </div>

                {deliveryOption === 'campus' && (
                  <select
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                    className={`w-full p-3 rounded-lg border ${
                      isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                  >
                    <option value="">Choisir un point de retrait</option>
                    <option value="ul-cafeteria">UL - Cafétéria Centrale</option>
                    <option value="ul-bde">UL - BDE Droit</option>
                    <option value="estba">ESTBA - Réception</option>
                    <option value="uk">Université de Kara</option>
                  </select>
                )}

                <div>
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-[#1b9abe] transition-colors">
                    <input
                      type="radio"
                      name="delivery"
                      value="home"
                      checked={deliveryOption === 'home'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="text-[#1b9abe]"
                    />
                    <MapPin size={24} className="text-blue-600" />
                    <div className="flex-1">
                      <div className="font-bold">Livraison à domicile</div>
                      <div className="text-sm text-gray-500">Sous 24-48h selon votre zone</div>
                    </div>
                    <div className="font-bold">1,500 FCFA</div>
                  </label>
                </div>
              </div>
            </div>

            {/* Step 2: Paiement */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-[#1b9abe] text-white' : isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  2
                </div>
                <h2 className="text-xl font-bold">Méthode de paiement</h2>
              </div>

              <div className="space-y-4">
                {availablePaymentMethods.filter(m => m.available).map(method => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-[#1b9abe] transition-colors ${
                      paymentMethod === method.id ? 'border-[#1b9abe] bg-[#daf1f4] dark:bg-[#283d4a]/20' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-[#1b9abe]"
                    />
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <div className="font-bold">{method.name}</div>
                      <div className="text-sm text-gray-500">{method.description}</div>
                    </div>
                    {method.fees > 0 && (
                      <div className="text-xs text-gray-500">+{method.fees}% frais</div>
                    )}
                  </label>
                ))}
              </div>

              {/* Phone number for mobile money */}
              {(paymentMethod === 'flooz' || paymentMethod === 'tmoney') && (
                <div className="mt-4">
                  <label className="block font-medium mb-2">Numéro de téléphone</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+228 90 00 00 00"
                    className={`w-full p-3 rounded-lg border ${
                      isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-[#1b9abe]`}
                  />
                </div>
              )}
            </div>

            {/* Security badge */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Lock size={16} />
              <span>Paiement 100% sécurisé et crypté</span>
            </div>
          </div>

          {/* Sidebar - Résumé */}
          <div>
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-xl sticky top-4`}>
              <h3 className="text-xl font-bold mb-4">Résumé de la commande</h3>

              {/* Items */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                      <p className="text-sm text-[#1b9abe] font-bold">
                        {item.price.toLocaleString()} FCFA
                        {item.quantity > 1 && ` x${item.quantity}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-medium">{subtotal.toLocaleString()} FCFA</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Livraison</span>
                    <span className="font-medium">{deliveryFee.toLocaleString()} FCFA</span>
                  </div>
                )}
                {fees > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Frais de paiement</span>
                    <span className="font-medium">{fees.toLocaleString()} FCFA</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-[#1b9abe]">
                    {total.toLocaleString()} FCFA
                  </span>
                </div>
              </div>

              {/* Pay button */}
              <button
                onClick={handlePayment}
                disabled={processing || (deliveryOption === 'campus' && !selectedCampus)}
                className={`w-full py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${
                  processing || (deliveryOption === 'campus' && !selectedCampus)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#1b9abe] hover:bg-[#139cbc] text-white'
                }`}
              >
                {processing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Traitement...
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    Payer {total.toLocaleString()} FCFA
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                En continuant, vous acceptez nos conditions générales de vente
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
