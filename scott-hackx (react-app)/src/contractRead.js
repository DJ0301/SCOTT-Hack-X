import contractAbi from './contract.json'; 
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://erpc.apothem.network');
const contractAddress = 'xdcf80387C9C7C0cBa5B46149C9582a954E585e9b90';

async function getSupplierDetails(supplierIndex) {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi);

    const supplier = await contract.getSupplier(supplierIndex);

    
    console.log('Supplier Details:', {
      productId: supplier[0], // productId
      name: supplier[1], // name
      stock: supplier[2], // stock
      costPerItem: supplier[3], // costPerItem
      orderQuantity: supplier[4], // orderQuantity
      shippingCost: supplier[5], // shippingCost
      shippingTime: supplier[6], // shippingTime
      transportMode: supplier[7], // transportMode
      routes: supplier[8], // routes
      destinations: supplier[9], // destinations
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getProductDetails(productIndex) {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi);
    const product = await contract.getProduct(productIndex);

    console.log('Product Details:', {
      productId: product[0],
      productType: product[1],
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getManufacturerDetails(manufacturerIndex) {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi);
    const manufacturer = await contract.getManufacturer(manufacturerIndex);

    console.log('Manufacturer Details:', {
      productId: manufacturer[0],
      productType: manufacturer[1],
      name: manufacturer[2],
      cost: manufacturer[3],
      defectRates: manufacturer[4],
      shippingCost: manufacturer[5],
      shippingTime: manufacturer[6],
      transportMode: manufacturer[7],
      routes: manufacturer[8],
      destinations: manufacturer[9],
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getDistributorDetails(distributorIndex) {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi);
    const distributor = await contract.getDistributor(distributorIndex);

    console.log('Distributor Details:', {
      productId: distributor[0],
      productType: distributor[1],
      name: distributor[2],
      cost: distributor[3],
      shippingCost: distributor[4],
      shippingTime: distributor[5],
      transportMode: distributor[6],
      routes: distributor[7],
      destinations: distributor[8],
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getRetailerDetails(retailerIndex) {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi);
    const retailer = await contract.getRetailer(retailerIndex);

    console.log('Retailer Details:', {
      productId: retailer[0],
      productType: retailer[1],
      name: retailer[2],
      cost: retailer[3],
      productsSold: retailer[4],
      shippingCost: retailer[5],
      shippingTime: retailer[6],
      transportMode: retailer[7],
      routes: retailer[8],
      destinations: retailer[9],
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getReturns() {
  try {
    const contract = new ethers.Contract(contractAddress, contractAbi);
    const returns = await contract.getReturns();

    console.log('Company Returns:', {
      productId: returns[0],
      productType: returns[1],
      productReturns: returns[2],
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

export { getSupplierDetails,getManufacturerDetails,getDistributorDetails,getRetailerDetails,getProductDetails,getReturns};
