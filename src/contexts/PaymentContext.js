import React, { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

export const PaymentProvider = ({ children }) => {
  const [paymentMethod, setPaymentMethod] = useState('flooz'); // flooz, tmoney, card, cash
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);

  // Méthodes de paiement disponibles au Togo
  const availablePaymentMethods = [
    {
      id: 'flooz',
      name: 'Flooz (Togocom)',
      icon: '📱',
      description: 'Paiement mobile money Togocom',
      fees: 1, // 1% de frais
      color: 'red',
      available: true,
      popular: true
    },
    {
      id: 'tmoney',
      name: 'T-Money (Moov)',
      icon: '📱',
      description: 'Paiement mobile money Moov',
      fees: 1,
      color: 'blue',
      available: true,
      popular: true
    },
    {
      id: 'card',
      name: 'Carte Bancaire',
      icon: '💳',
      description: 'Visa, Mastercard',
      fees: 2.5,
      color: 'purple',
      available: true,
      popular: false
    },
    {
      id: 'cash',
      name: 'Espèces à la livraison',
      icon: '💵',
      description: 'Paiement en espèces lors de la réception',
      fees: 0,
      color: 'green',
      available: true,
      popular: true
    },
    {
      id: 'fedapay',
      name: 'FedaPay',
      icon: '🔐',
      description: 'Passerelle sécurisée (Flooz + T-Money + CB)',
      fees: 2,
      color: 'orange',
      available: true,
      popular: false
    }
  ];

  // Initier un paiement
  const initiatePayment = async (paymentData) => {
    const { method, amount, orderId, phoneNumber, description } = paymentData;

    // Simulation d'un paiement
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const transaction = {
          id: `TXN${Date.now()}`,
          orderId,
          method,
          amount,
          fees: calculateFees(method, amount),
          total: amount + calculateFees(method, amount),
          status: 'pending',
          createdAt: new Date().toISOString(),
          description
        };

        // Simulation: 90% de succès
        if (Math.random() > 0.1) {
          transaction.status = 'success';
          transaction.completedAt = new Date().toISOString();
          addToHistory(transaction);
          resolve(transaction);
        } else {
          transaction.status = 'failed';
          transaction.failedAt = new Date().toISOString();
          transaction.error = 'Paiement refusé. Veuillez réessayer.';
          reject(transaction);
        }
      }, 2000);
    });
  };

  // Paiement FedaPay (intégration réelle)
  const payWithFedaPay = async (paymentData) => {
    const { amount, description, customerEmail, customerPhone } = paymentData;

    // Configuration FedaPay (à adapter avec vos vraies clés)
    const FEDAPAY_PUBLIC_KEY = process.env.REACT_APP_FEDAPAY_PUBLIC_KEY || 'pk_sandbox_test';

    try {
      // En production, vous utiliseriez l'API FedaPay
      // Pour le moment, simulation
      return await initiatePayment({
        method: 'fedapay',
        amount,
        description,
        phoneNumber: customerPhone,
        orderId: `ORD${Date.now()}`
      });
    } catch (error) {
      throw new Error('Erreur lors du paiement FedaPay');
    }
  };

  // Calculer les frais de transaction
  const calculateFees = (method, amount) => {
    const methodConfig = availablePaymentMethods.find(m => m.id === method);
    if (!methodConfig) return 0;
    return Math.round((amount * methodConfig.fees) / 100);
  };

  // Ajouter à l'historique
  const addToHistory = (transaction) => {
    setPaymentHistory(prev => [transaction, ...prev]);
  };

  // Sauvegarder une méthode de paiement
  const savePaymentMethod = (methodData) => {
    const newMethod = {
      id: `pm_${Date.now()}`,
      ...methodData,
      savedAt: new Date().toISOString()
    };
    setSavedPaymentMethods(prev => [...prev, newMethod]);
    return newMethod;
  };

  // Supprimer une méthode sauvegardée
  const removeSavedMethod = (methodId) => {
    setSavedPaymentMethods(prev => prev.filter(m => m.id !== methodId));
  };

  // Vérifier un numéro de téléphone mobile money
  const verifyPhoneNumber = async (phoneNumber, provider) => {
    // Validation basique du format togolais
    const togolesePhoneRegex = /^(\+228)?[97]\d{7}$/;
    
    if (!togolesePhoneRegex.test(phoneNumber)) {
      return {
        valid: false,
        error: 'Numéro de téléphone invalide. Format: 90123456 ou +22890123456'
      };
    }

    // Simulation de vérification
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          valid: true,
          provider: provider,
          phoneNumber: phoneNumber,
          formatted: phoneNumber.startsWith('+228') ? phoneNumber : `+228${phoneNumber}`
        });
      }, 500);
    });
  };

  // Obtenir l'historique filtré
  const getFilteredHistory = (filters = {}) => {
    let filtered = [...paymentHistory];

    if (filters.method) {
      filtered = filtered.filter(t => t.method === filters.method);
    }

    if (filters.status) {
      filtered = filtered.filter(t => t.status === filters.status);
    }

    if (filters.dateFrom) {
      filtered = filtered.filter(t => new Date(t.createdAt) >= new Date(filters.dateFrom));
    }

    if (filters.dateTo) {
      filtered = filtered.filter(t => new Date(t.createdAt) <= new Date(filters.dateTo));
    }

    return filtered;
  };

  // Obtenir les statistiques de paiement
  const getPaymentStats = () => {
    const total = paymentHistory.reduce((sum, t) => sum + (t.status === 'success' ? t.total : 0), 0);
    const successful = paymentHistory.filter(t => t.status === 'success').length;
    const failed = paymentHistory.filter(t => t.status === 'failed').length;
    const pending = paymentHistory.filter(t => t.status === 'pending').length;

    return {
      total,
      successful,
      failed,
      pending,
      count: paymentHistory.length,
      successRate: paymentHistory.length > 0 ? (successful / paymentHistory.length * 100).toFixed(1) : 0
    };
  };

  // Demander un remboursement
  const requestRefund = async (transactionId, reason) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedHistory = paymentHistory.map(t => 
          t.id === transactionId 
            ? { ...t, status: 'refund_requested', refundReason: reason, refundRequestedAt: new Date().toISOString() }
            : t
        );
        setPaymentHistory(updatedHistory);
        resolve({ success: true, message: 'Demande de remboursement envoyée' });
      }, 1000);
    });
  };

  const value = {
    paymentMethod,
    setPaymentMethod,
    paymentHistory,
    savedPaymentMethods,
    availablePaymentMethods,
    initiatePayment,
    payWithFedaPay,
    calculateFees,
    savePaymentMethod,
    removeSavedMethod,
    verifyPhoneNumber,
    getFilteredHistory,
    getPaymentStats,
    requestRefund
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};
