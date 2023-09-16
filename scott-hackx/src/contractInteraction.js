import contractAbi from './contract.json';
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://erpc.apothem.network');
    console.log('Provider initialized:', provider);
    const signer = provider.getSigner();
    const contractAddress = '0xb8b90fdca71590f035614c157c2605ec529fe46e'; // Replace with your contract address
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

async function addSupplier(
  productId,
  name,
  stock,
  costPerItem,
  orderQuantity,
  shippingCost,
  shippingTime,
  transportMode,
  routes,
  destinations
) {
  try {
    console.log('Provider initialized:', provider);
    const signer = provider.getSigner();
    const contractAddress = '0xA9617BD6949ce4E434006Fe6A327dD536CFD9eAe'; // Replace with your contract address
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const tx = await contract.addSupplier(
      productId,
      name,
      stock,
      costPerItem,
      orderQuantity,
      shippingCost,
      shippingTime,
      transportMode,
      routes,
      destinations,
      { gasLimit: 1000000 } // Increase gasLimit as needed
    );
    await tx.wait();
    console.log('Supplier added successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

  async function addManufacturer(//Manufacturer Add Function
    productId,
    productType,
    name,
    cost,
    defectRates,
    shippingCost,
    shippingTime,
    transportMode,
    routes,
    destinations
  ) {
    try {
      const tx = await contract.addManufacturer(
        productId,
        productType,
        name,
        cost,
        defectRates,
        shippingCost,
        shippingTime,
        transportMode,
        routes,
        destinations,
        { gasLimit: 1000000 } // Increase gasLimit as needed
      );
      await tx.wait();
      console.log('Manufacturer added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function addDistributor(
    productId,
    productType,
    name,
    cost,
    shippingCost,
    shippingTime,
    transportMode,
    routes,
    destinations
  ) {
    try {
      const tx = await contract.addDistributor(
        productId,
        productType,
        name,
        cost,
        shippingCost,
        shippingTime,
        transportMode,
        routes,
        destinations,
        { gasLimit: 1000000 } // Increase gasLimit as needed
      );
      await tx.wait();
      console.log('Distributor added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async function addRetailer(
    productId,
    productType,
    name,
    cost,
    productsSold,
    shippingCost,
    shippingTime,
    transportMode,
    routes,
    destinations
  ) {
    try {
      const tx = await contract.addRetailer(
        productId,
        productType,
        name,
        cost,
        productsSold,
        shippingCost,
        shippingTime,
        transportMode,
        routes,
        destinations,
        { gasLimit: 1000000 } // Increase gasLimit as needed
      );
      await tx.wait();
      console.log('Retailer added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function setProductReturns(productId, productType, productReturns) {
    try {
      const tx = await contract.setProductReturns(
        productId,
        productType,
        productReturns,
        { gasLimit: 1000000 } // Increase gasLimit as needed
      );
      await tx.wait();
      console.log('Product returns updated successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export {addSupplier,addDistributor,addManufacturer,addRetailer,setProductReturns};