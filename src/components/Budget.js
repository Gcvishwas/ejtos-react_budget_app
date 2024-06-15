import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  }

  const handleBlur = () => {
    dispatch({
      type: 'SET_BUDGET',
      payload: parseInt(newBudget),
    });
  }

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
    </div>
  );
};

export default Budget;
