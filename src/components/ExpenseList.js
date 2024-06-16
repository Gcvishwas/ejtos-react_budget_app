import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses, dispatch } = useContext(AppContext);

  // Remove unused variables or comment them with eslint-disable-next-line if intended for future use
  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleIncrement = (id) => {
    dispatch({
      type: 'INC_EXPENSE',
      payload: id,
    });
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Department</th>
          <th scope='col'>Allocated Budget</th>
          <th scope='col'>Increase by 10</th>
          <th scope='col'>Decrease by 10</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;