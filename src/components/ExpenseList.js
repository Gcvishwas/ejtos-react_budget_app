import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses, dispatch } = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

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
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>£{expense.cost}</td>
            <td>
              <button 
                className='btn btn-outline-success btn-sm'
                onClick={() => handleIncrement(expense.id)}
              >
                +
              </button>
            </td>
            <td>
              <button 
                className='btn btn-outline-danger btn-sm'
                onClick={() => handleDelete(expense.id)}
              >
                ×
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
