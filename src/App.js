import React from 'react';
import Budget from './components/Budget'; // Correct import path
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

function App() {
  return (
    <div className="App">
      <div className='col-sm'>
        <Budget />
      </div>
      <div className='col-sm'>
        <Remaining />
      </div>
      <div className='col-sm'>
        <ExpenseTotal />
      </div>
    </div>
  );
}

export default App;
