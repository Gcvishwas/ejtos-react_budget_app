import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <li key={expense.id} className='list-group-item d-flex justify-content-between align-items-center'>
          {expense.name}
          <div>
            <span className='badge badge-primary badge-pill mr-3'>
              £{expense.cost}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
