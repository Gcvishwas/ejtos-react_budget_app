// context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [budget, setBudget] = useState(1000); // Default budget
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Transportation', cost: 20 },
  ]);

  return (
    <AppContext.Provider value={{ budget, expenses, setBudget, setExpenses }}>
      {children}
    </AppContext.Provider>
  );
};
