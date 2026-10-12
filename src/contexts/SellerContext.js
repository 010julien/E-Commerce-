import React, { createContext, useContext, useState, useEffect } from 'react';

const SellerContext = createContext();

export const useSeller = () => {
  const context = useContext(SellerContext);
  if (!context) {
    throw new Error('useSeller must be used within a SellerProvider');
  }
  return context;
};

export const SellerProvider = ({ children }) => {
  const [currentSeller, setCurrentSeller] = useState(null);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [sellerServices, setSellerServices] = useState([]);
  const [sellerStats, setSellerStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    rating: 0,
    reviews: 0,
    revenue: 0
  });
  const [isVerified, setIsVerified] = useState(false);

  // Charger les données du vendeur depuis localStorage
  useEffect(() => {
    const savedSeller = localStorage.getItem('currentSeller');
    if (savedSeller) {
      setCurrentSeller(JSON.parse(savedSeller));
    }
  }, []);

  // Sauvegarder le vendeur actuel
  useEffect(() => {
    if (currentSeller) {
      localStorage.setItem('currentSeller', JSON.stringify(currentSeller));
    }
  }, [currentSeller]);

  // Devenir vendeur
  const becomeSeller = (sellerData) => {
    const newSeller = {
      id: `seller_${Date.now()}`,
      ...sellerData,
      createdAt: new Date().toISOString(),
      verified: false,
      rating: 0,
      totalReviews: 0,
      totalSales: 0
    };
    setCurrentSeller(newSeller);
    return newSeller;
  };

  // Mettre à jour les informations du vendeur
  const updateSeller = (updates) => {
    setCurrentSeller(prev => ({
      ...prev,
      ...updates
    }));
  };

  // Ajouter un produit
  const addProduct = (product) => {
    const newProduct = {
      id: `prod_${Date.now()}`,
      ...product,
      sellerId: currentSeller?.id,
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    setSellerProducts(prev => [...prev, newProduct]);
    return newProduct;
  };

  // Ajouter un service
  const addService = (service) => {
    const newService = {
      id: `srv_${Date.now()}`,
      ...service,
      sellerId: currentSeller?.id,
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    setSellerServices(prev => [...prev, newService]);
    return newService;
  };

  // Supprimer un produit
  const deleteProduct = (productId) => {
    setSellerProducts(prev => prev.filter(p => p.id !== productId));
  };

  // Supprimer un service
  const deleteService = (serviceId) => {
    setSellerServices(prev => prev.filter(s => s.id !== serviceId));
  };

  // Mettre à jour un produit
  const updateProduct = (productId, updates) => {
    setSellerProducts(prev =>
      prev.map(p => p.id === productId ? { ...p, ...updates } : p)
    );
  };

  // Mettre à jour un service
  const updateService = (serviceId, updates) => {
    setSellerServices(prev =>
      prev.map(s => s.id === serviceId ? { ...s, ...updates } : s)
    );
  };

  // Vérifier le statut de vendeur
  const requestVerification = async (documents) => {
    // Simulation d'une requête API
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsVerified(true);
        updateSeller({ verified: true, verifiedAt: new Date().toISOString() });
        resolve({ success: true, message: 'Vérification en cours' });
      }, 1000);
    });
  };

  // Statistiques du vendeur
  const updateStats = (newStats) => {
    setSellerStats(prev => ({
      ...prev,
      ...newStats
    }));
  };

  // Déconnexion vendeur
  const logoutSeller = () => {
    setCurrentSeller(null);
    setSellerProducts([]);
    setSellerServices([]);
    setSellerStats({
      totalSales: 0,
      totalOrders: 0,
      rating: 0,
      reviews: 0,
      revenue: 0
    });
    localStorage.removeItem('currentSeller');
  };

  const value = {
    currentSeller,
    sellerProducts,
    sellerServices,
    sellerStats,
    isVerified,
    becomeSeller,
    updateSeller,
    addProduct,
    addService,
    deleteProduct,
    deleteService,
    updateProduct,
    updateService,
    requestVerification,
    updateStats,
    logoutSeller
  };

  return (
    <SellerContext.Provider value={value}>
      {children}
    </SellerContext.Provider>
  );
};
