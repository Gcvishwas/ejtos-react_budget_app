import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
  const { budget, expenses, dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('Add');

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const remainingBudget = budget - totalExpenses;

  const submitEvent = () => {
    if (action === 'Add' && cost > remainingBudget) {
      alert(`The value cannot exceed remaining funds: £${remainingBudget}`);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }

    setName('');
    setCost('');
  };

  return (
    <div>
      <div className='row'>
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
            <option defaultValue>Choose...</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Admin">Admin</option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
          </div>
          <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
            <option defaultValue value="Add">Add</option>
            <option value="Reduce">Reduce</option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <span className="input-group-text">£</span>
          </div>
          <input
            required='required'
            type='number'
            id='cost'
            value={cost}
            style={{ marginLeft: '2rem', size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          />

          <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
