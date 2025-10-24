// Utility functions for safe localStorage operations

export const safeGetItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error parsing ${key} from localStorage:`, error);
    localStorage.removeItem(key);
    return defaultValue;
  }
};

export const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Error saving ${key} to localStorage:`, error);
    return false;
  }
};

export const clearCorruptedData = () => {
  const keysToCheck = ['theme', 'cart'];
  
  keysToCheck.forEach(key => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        JSON.parse(item);
      }
    } catch (error) {
      console.warn(`Removing corrupted ${key} data from localStorage`);
      localStorage.removeItem(key);
    }
  });
};

// Run cleanup on module load
clearCorruptedData();
