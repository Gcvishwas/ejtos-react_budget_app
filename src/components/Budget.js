import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [error, setError] = useState('');

  const handleBudgetChange = (event) => {
    const value = parseInt(event.target.value);
    if (value < totalExpenses) {
      setError('You cannot reduce the budget value lower than the spending amount.');
    } else if (value > 20000) {
      setError('Budget cannot exceed £20,000.');
    } else {
      setNewBudget(value);
      setError('');
    }
  };

  const handleBlur = () => {
    if (error) return; // Don't update if there's an error

    dispatch({
      type: 'SET_BUDGET',
      payload: newBudget,
    });
  };

  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={handleBlur}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Budget;
