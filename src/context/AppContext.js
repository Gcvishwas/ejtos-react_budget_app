// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [budget, setBudget] = useState(1000); // Default budget

  return (
    <AppContext.Provider value={{ budget, setBudget }}>
      {children}
    </AppContext.Provider>
  );
};
