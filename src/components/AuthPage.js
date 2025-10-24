import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Crown } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {isLogin 
              ? 'Accédez à votre compte Cool-Chic' 
              : 'Rejoignez la communauté Cool-Chic'
            }
          </p>
        </div>

        {/* Auth Form */}
        <div className="card p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Registration Fields */}
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required={!isLogin}
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        placeholder="Prénom"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required={!isLogin}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        placeholder="Nom"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adresse
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      placeholder="123 Rue de la Paix, Paris"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field pl-10"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-field pl-10 pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password for Registration */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required={!isLogin}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                    Se souvenir de moi
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-primary-600 hover:text-primary-500 font-medium"
                >
                  Mot de passe oublié ?
                </button>
              </div>
            )}

            {/* Terms and Conditions for Registration */}
            {!isLogin && (
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required={!isLogin}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                  J'accepte les{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    conditions d'utilisation
                  </a>{' '}
                  et la{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                    politique de confidentialité
                  </a>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg font-semibold"
            >
              {isLogin ? 'Se connecter' : 'Créer mon compte'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Ou</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuer avec Google
            </button>
            
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continuer avec Facebook
            </button>
          </div>

          {/* Toggle Login/Register */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 font-medium text-primary-600 hover:text-primary-500"
              >
                {isLogin ? 'Créer un compte' : 'Se connecter'}
              </button>
            </p>
          </div>
        </div>

        {/* Prime Benefits */}
        <div className="card p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-center space-x-3 mb-4">
            <Crown className="h-6 w-6 text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Avantages Cool-Chic Prime
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Livraison gratuite en 1 jour</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Prime Video inclus</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Prime Music illimité</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Offres exclusives</span>
            </li>
          </ul>
          <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors">
            Essai gratuit 30 jours
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
