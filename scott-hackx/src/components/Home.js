import React, { useState } from 'react';
import SupplierForm from './SupplierForm'; // Import your SupplierForm component
import ManufacturerForm from './ManufacturerForm'; // Import your ManufacturerForm component
import ReturnsDetails from './ReturnsDetails'; // Import your ReturnsDetails component
import DistributorForm from './DistributorForm'; // Import your DistributorForm component
import RetailerForm from './RetailerForm'; // Import your RetailerForm component

function Home() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <h1>Supply Chain Management</h1>
      <div>
        <button onClick={() => renderComponent(<SupplierForm />)}>Add Supplier</button>
        <button onClick={() => renderComponent(<ManufacturerForm />)}>Add Manufacturer</button>
        <button onClick={() => renderComponent(<ReturnsDetails />)}>Return Details</button>
        <button onClick={() => renderComponent(<DistributorForm />)}>Add Distributor</button>
        <button onClick={() => renderComponent(<RetailerForm />)}>Add Retailer</button>
      </div>
      {activeComponent && (
        <div>
          {activeComponent}
          <button onClick={() => setActiveComponent(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Home;
