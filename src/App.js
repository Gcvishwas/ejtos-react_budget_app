import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';

const App = () => {
  const [currency, setCurrency] = useState('£'); // Default currency pound

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3 align-items-center'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
          <div className='col-sm'>
            <div className="input-group mb-3" style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px' }}>
              <label className="mr-2" htmlFor="inputGroupSelectCurrency">Currency</label>
              <select className="custom-select" id="inputGroupSelectCurrency" value={currency} onChange={handleCurrencyChange} style={{ width: 'auto', backgroundColor: '#c3e6cb', color: '#155724' }}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
              </select>
            </div>
          </div>
        </div>
        <h3 className='mt-3'>Allocation</h3>
        <div className='row'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Change allocation</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
