import React from 'react';
import './App.css';
import SupplierForm from './components/SupplierForm';
import SupplierDetails from './components/SupplierDetails.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Supply Chain Optimization</h1>
        <SupplierForm/>
        <SupplierDetails/>
      </header>
    </div>
  );
}

export default App;
