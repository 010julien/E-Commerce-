import React, { useState, useEffect } from 'react';
import { ChevronUp, Zap, TrendingUp, Users, Package } from 'lucide-react';

// Composant pour le bouton "Retour en haut" animé
export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Retour en haut"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

// Composant pour les statistiques animées
export const AnimatedStats = () => {
  const [counts, setCounts] = useState({
    products: 0,
    customers: 0,
    orders: 0,
    satisfaction: 0
  });

  const finalCounts = {
    products: 2500000,
    customers: 150000,
    orders: 500000,
    satisfaction: 98
  };

  useEffect(() => {
    const duration = 2000; // 2 secondes
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(finalCounts).map(key => {
      const increment = finalCounts[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        setCounts(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(increment * currentStep), finalCounts[key])
        }));

        if (currentStep >= steps) {
          clearInterval(timers.find(t => t === this));
        }
      }, stepDuration);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const stats = [
    {
      icon: Package,
      label: 'Produits',
      value: counts.products.toLocaleString(),
      color: 'text-blue-600'
    },
    {
      icon: Users,
      label: 'Clients satisfaits',
      value: counts.customers.toLocaleString(),
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      label: 'Commandes livrées',
      value: counts.orders.toLocaleString(),
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      label: 'Satisfaction client',
      value: `${counts.satisfaction}%`,
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Cool-Chic en chiffres
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez pourquoi des millions de clients nous font confiance pour leurs achats en ligne
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Composant pour les notifications toast
export const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${getToastStyles()}`}
    >
      <div className="flex items-center space-x-2">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
};

// Composant pour le loader de page
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-4 animate-pulse">
          <span className="text-white font-bold text-2xl">C</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Chargement...</p>
      </div>
    </div>
  );
};

// Composant pour les cartes avec effet de survol
export const HoverCard = ({ children, className = '' }) => {
  return (
    <div className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
};

// Composant pour l'animation de fade-in au scroll
export const FadeInOnScroll = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef]);

  return (
    <div
      ref={setElementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Composant pour le skeleton loading
export const SkeletonLoader = ({ className = '', lines = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-300 dark:bg-gray-700 h-4 rounded mb-2"></div>
      {Array.from({ length: lines - 1 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 h-4 rounded mb-2"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        ></div>
      ))}
    </div>
  );
};

// Composant pour les badges animés
export const AnimatedBadge = ({ children, color = 'primary', pulse = false }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'info':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${getColorClasses()} ${
        pulse ? 'animate-pulse' : ''
      }`}
    >
      {children}
    </span>
  );
};

// Composant pour les boutons avec effet de ripple
export const RippleButton = ({ children, onClick, className = '', ...props }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '600ms'
          }}
        />
      ))}
    </button>
  );
};

export default {
  ScrollToTopButton,
  AnimatedStats,
  Toast,
  PageLoader,
  HoverCard,
  FadeInOnScroll,
  SkeletonLoader,
  AnimatedBadge,
  RippleButton
};
