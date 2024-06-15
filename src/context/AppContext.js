import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  budget: 1000,
  expenses: [
    { id: 1, name: 'Marketing', cost: 50 },
    { id: 2, name: 'Finance', cost: 300 },
    { id: 3, name: 'Sales', cost: 70 },
    { id: 4, name: 'Human Resource', cost: 40 },
    { id: 5, name: 'IT', cost: 500 },
  ],
};

// Create context
export const AppContext = createContext();

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload),
      };
    case 'INC_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense => {
          if (expense.id === action.payload) {
            return { ...expense, cost: expense.cost + 10 };
          }
          return expense;
        }),
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
