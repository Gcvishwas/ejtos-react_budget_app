import React, { createContext, useReducer } from 'react';

// Create a context for the app
export const AppContext = createContext();

// Define initial state
const initialState = {
  budget: 1000,
  expenses: [
    { id: 1, name: 'Shopping', cost: 50 },
    { id: 2, name: 'Transportation', cost: 20 },
  ]
};

// Define a reducer to handle budget and expenses actions
const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'RED_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.name === action.payload.name
            ? { ...expense, cost: expense.cost - action.payload.cost }
            : expense
        ),
      };
    default:
      return state;
  }
};

// Provide the state and dispatch function to the app
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
