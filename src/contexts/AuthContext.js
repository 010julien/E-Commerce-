import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Charger l'utilisateur depuis localStorage au montage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Sauvegarder l'utilisateur dans localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [user]);

  // Inscription
  const register = async (userData) => {
    const { name, email, password, university, faculty, studentId, phone } = userData;

    // Simulation d'une inscription
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validation basique
        if (!email || !password || !name) {
          reject({ error: 'Tous les champs obligatoires doivent être remplis' });
          return;
        }

        // Vérifier si l'email existe déjà (simulation)
        const existingUser = localStorage.getItem(`user_${email}`);
        if (existingUser) {
          reject({ error: 'Cet email est déjà utilisé' });
          return;
        }

        const newUser = {
          id: `user_${Date.now()}`,
          name,
          email,
          university,
          faculty,
          studentId,
          phone,
          avatar: `https://i.pravatar.cc/150?u=${email}`,
          role: 'student',
          verified: false,
          createdAt: new Date().toISOString(),
          wishlist: [],
          orders: [],
          addresses: []
        };

        // Sauvegarder l'utilisateur
        localStorage.setItem(`user_${email}`, JSON.stringify({ ...newUser, password }));
        
        setUser(newUser);
        setIsAuthenticated(true);
        resolve(newUser);
      }, 1000);
    });
  };

  // Connexion
  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Récupérer l'utilisateur
        const savedUser = localStorage.getItem(`user_${email}`);
        
        if (!savedUser) {
          reject({ error: 'Email ou mot de passe incorrect' });
          return;
        }

        const userData = JSON.parse(savedUser);
        
        if (userData.password !== password) {
          reject({ error: 'Email ou mot de passe incorrect' });
          return;
        }

        // Connexion réussie
        const { password: _, ...userWithoutPassword } = userData;
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        resolve(userWithoutPassword);
      }, 1000);
    });
  };

  // Déconnexion
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
  };

  // Mettre à jour le profil
  const updateProfile = async (updates) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        
        // Mettre à jour dans localStorage
        const savedUser = localStorage.getItem(`user_${user.email}`);
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          localStorage.setItem(`user_${user.email}`, JSON.stringify({ ...userData, ...updates }));
        }
        
        resolve(updatedUser);
      }, 500);
    });
  };

  // Vérifier le statut étudiant
  const verifyStudentStatus = async (documents) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedUser = {
          ...user,
          verified: true,
          verifiedAt: new Date().toISOString(),
          verificationDocuments: documents
        };
        setUser(updatedUser);
        resolve({ success: true, message: 'Vérification en cours' });
      }, 1500);
    });
  };

  // Ajouter une adresse
  const addAddress = (address) => {
    const newAddress = {
      id: `addr_${Date.now()}`,
      ...address,
      createdAt: new Date().toISOString()
    };
    
    const updatedUser = {
      ...user,
      addresses: [...(user.addresses || []), newAddress]
    };
    
    setUser(updatedUser);
    return newAddress;
  };

  // Supprimer une adresse
  const removeAddress = (addressId) => {
    const updatedUser = {
      ...user,
      addresses: user.addresses.filter(addr => addr.id !== addressId)
    };
    setUser(updatedUser);
  };

  // Définir l'adresse par défaut
  const setDefaultAddress = (addressId) => {
    const updatedAddresses = user.addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === addressId
    }));
    
    const updatedUser = {
      ...user,
      addresses: updatedAddresses
    };
    
    setUser(updatedUser);
  };

  // Ajouter à la wishlist
  const addToWishlist = (productId) => {
    if (!user.wishlist.includes(productId)) {
      const updatedUser = {
        ...user,
        wishlist: [...user.wishlist, productId]
      };
      setUser(updatedUser);
    }
  };

  // Retirer de la wishlist
  const removeFromWishlist = (productId) => {
    const updatedUser = {
      ...user,
      wishlist: user.wishlist.filter(id => id !== productId)
    };
    setUser(updatedUser);
  };

  // Vérifier si un produit est dans la wishlist
  const isInWishlist = (productId) => {
    return user?.wishlist?.includes(productId) || false;
  };

  // Ajouter une commande
  const addOrder = (order) => {
    const newOrder = {
      id: `order_${Date.now()}`,
      ...order,
      userId: user.id,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    
    const updatedUser = {
      ...user,
      orders: [...(user.orders || []), newOrder]
    };
    
    setUser(updatedUser);
    return newOrder;
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    register,
    login,
    logout,
    updateProfile,
    verifyStudentStatus,
    addAddress,
    removeAddress,
    setDefaultAddress,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    addOrder
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
