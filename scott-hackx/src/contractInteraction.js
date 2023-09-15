import contractAbi from './contract.json';
const { ethers } = require("ethers");

async function interactWithContract(productId, productName) {
  try {
    const provider = new ethers.providers.JsonRpcProvider('https://erpc.apothem.network');
    console.log('Provider initialized:', provider);
    const signer = provider.getSigner();
    const contractAddress = '0xbb15b1a4fa50d81b46ea823f73995a98ce8b9fe0';
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    const tx = await contract.addProduct(productId, productName, { gasLimit: 300000 }); // Increase gasLimit as needed
    await tx.wait();
    console.log('Product added successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

export { interactWithContract };
