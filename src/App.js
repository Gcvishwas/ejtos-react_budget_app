// App.js
import React from 'react';
import Budget from './components/Budget'; // Correct import path
import Remaining from './components/Remaining';
                 //Remaining component
                 <div className='col-sm'>
                 <Remaining />
             </div>
function App() {
  return (
    <div className="App">
      <div className='col-sm'>
        <Budget />
      </div>
    </div>
  );
}

export default App;
