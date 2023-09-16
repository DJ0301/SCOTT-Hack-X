import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SupplierForm from './SupplierForm'; // Import your SupplierForm component
import ManufacturerForm from './ManufacturerForm'; // Import your ManufacturerForm component
// import ReturnsDetails from './ReturnsDetails'; // Import your ReturnsDetails component
import DistributorForm from './DistributorForm'; // Import your DistributorForm component
import RetailerForm from './RetailerForm'; // Import your RetailerForm component
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './rf.css';
import Logo from './LogoLight.png'

// Content from File 2
import SupplierDetails from './SupplierDetails'; // Import your SupplierDetails component
import ImageDisplay from './ImageDisplay';

function Home() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [mode, setMode] = useState('form'); // Initialize with 'form' mode

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  const switchToFormMode = () => {
    setMode('form');
    setActiveComponent(null);
  };

  const switchToDetailsMode = () => {
    setMode('details');
    setActiveComponent(null);
  };

  return (
    <div>
      <div className='Nav'>
        <img src={Logo} id='Logo'/>
        <div>
          {/* Buttons to switch between 'Form' and 'Details' modes */}
          <button onClick={switchToFormMode}>Form</button>
          <button onClick={switchToDetailsMode}>Details</button>
        </div>
      </div>
      {mode === 'form' && (
        <div className='container mx-auto py-8 px-4 lg:px-16 xl:px-32'>
          <button className='' onClick={() => renderComponent(<SupplierForm />)}>Add Supplier</button>
          <button className='' onClick={() => renderComponent(<ManufacturerForm />)}>Add Manufacturer</button>
          <button className='' onClick={() => renderComponent(<DistributorForm />)}>Add Distributor</button>
          <button className='' onClick={() => renderComponent(<RetailerForm />)}>Add Retailer</button>
        </div>
      )}
      {mode === 'details' && (
        <div>
          <button onClick={() => renderComponent(<SupplierDetails />)}>Details</button>
          <button onClick={() => (window.location.href = 'https://insightss.streamlit.app/')}>
            Optimize with AI
          </button>
        </div>
      )}
      {/* 'Optimize with AI' button */}
      {activeComponent && (
        <div>
          {activeComponent}
          <button onClick={() => setActiveComponent(null)}>Close</button>
        </div>
      )}
      <ImageDisplay />
    </div>
  );
}

export default Home;
