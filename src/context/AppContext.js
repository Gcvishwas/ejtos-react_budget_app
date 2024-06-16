import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // Check if the expense already exists
      const existingExpense = state.expenses.find(expense => expense.name === action.payload.name);
      
      if (existingExpense) {
        // If exists, update the cost
        return {
          ...state,
          expenses: state.expenses.map(expense =>
            expense.name === action.payload.name ? { ...expense, cost: expense.cost + action.payload.cost } : expense
          ),
        };
      } else {
        // If doesn't exist, add new expense
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      }
    
    case 'RED_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) => 
          expense.name === action.payload.name ? { ...expense, cost: expense.cost - action.payload.cost } : expense
        ),
      };
    
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    
    case 'INC_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? { ...expense, cost: expense.cost + action.payload.cost } : expense
        ),
      };
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    budget: 1000,
    expenses: [
      { id: 1, name: 'Marketing', cost: 50 },
      { id: 2, name: 'Finance', cost: 300 },
      { id: 3, name: 'Sales', cost: 70 },
      { id: 4, name: 'HR', cost: 40 },
      { id: 5, name: 'IT', cost: 500 },
    ],
  });

  return (
    <AppContext.Provider value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch,
    }}>
      {children}
    </AppContext.Provider>
  );
};
