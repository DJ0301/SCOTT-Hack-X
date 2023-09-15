// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    address public owner;

    struct Product {
        uint256 productId;
        string name;
    }

    struct Supplier {
        uint256 productId;
        uint256 stock;
        uint256 costPerItem;
        uint256 orderQuantity;
        uint256 leadTime;
        uint256 shippingCost;
        uint256 shippingTime;
        string transportMode;
        string[] routes;
        string[] destinations;
    }

    struct Manufacturer {
        uint256 productId;
        uint256 stock;
        uint256 costPerItem;
        uint256 orderQuantity;
        uint256 leadTime;
        uint256 defectRates;
        uint256 shippingCost;
        uint256 shippingTime;
        string transportMode;
        string[] routes;
        string[] destinations;
    }

    struct Distributor {
        uint256 productId;
        uint256 stock;
        uint256 costPerItem;
        uint256 orderQuantity;
        uint256 leadTime;
        uint256 shippingCost;
        uint256 shippingTime;
        string transportMode;
        string[] routes;
        string[] destinations;
    }

    struct Retailer {
        uint256 productId;
        uint256 stock;
        uint256 costPerItem;
        uint256 orderQuantity;
        uint256 leadTime;
        uint256 productsSold;
        uint256 shippingCost;
        uint256 shippingTime;
        string transportMode;
        string[] routes;
        string[] destinations;
    }

    struct Company {
        uint256 productId;
        uint256 productReturns;
    }

    Product[] public products;
    Supplier[] public suppliers;
    Manufacturer[] public manufacturers;
    Distributor[] public distributors;
    Retailer[] public retailers;
    Company public company;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function addProduct(uint256 _productId, string memory _name) public onlyOwner {
        products.push(Product(_productId, _name));
    }

    function addSupplier(
        uint256 _productId,
        uint256 _stock,
        uint256 _costPerItem,
        uint256 _orderQuantity,
        uint256 _leadTime,
        uint256 _shippingCost,
        uint256 _shippingTime,
        string memory _transportMode,
        string[] memory _routes,
        string[] memory _destinations
    ) public onlyOwner {
        suppliers.push(
            Supplier({
                productId: _productId,
                stock: _stock,
                costPerItem: _costPerItem,
                orderQuantity: _orderQuantity,
                leadTime: _leadTime,
                shippingCost: _shippingCost,
                shippingTime: _shippingTime,
                transportMode: _transportMode,
                routes: _routes,
                destinations: _destinations
            })
        );
    }

    function addManufacturer(
        uint256 _productId,
        uint256 _stock,
        uint256 _costPerItem,
        uint256 _orderQuantity,
        uint256 _leadTime,
        uint256 _defectRates,
        uint256 _shippingCost,
        uint256 _shippingTime,
        string memory _transportMode,
        string[] memory _routes,
        string[] memory _destinations
    ) public onlyOwner {
        manufacturers.push(
            Manufacturer({
                productId: _productId,
                stock: _stock,
                costPerItem: _costPerItem,
                orderQuantity: _orderQuantity,
                leadTime: _leadTime,
                defectRates: _defectRates,
                shippingCost: _shippingCost,
                shippingTime: _shippingTime,
                transportMode: _transportMode,
                routes: _routes,
                destinations: _destinations
            })
        );
    }

    function addDistributor(
        uint256 _productId,
        uint256 _stock,
        uint256 _costPerItem,
        uint256 _orderQuantity,
        uint256 _leadTime,
        uint256 _shippingCost,
        uint256 _shippingTime,
        string memory _transportMode,
        string[] memory _routes,
        string[] memory _destinations
    ) public onlyOwner {
        distributors.push(
            Distributor({
                productId: _productId,
                stock: _stock,
                costPerItem: _costPerItem,
                orderQuantity: _orderQuantity,
                leadTime: _leadTime,
                shippingCost: _shippingCost,
                shippingTime: _shippingTime,
                transportMode: _transportMode,
                routes: _routes,
                destinations: _destinations
            })
        );
    }

    function addRetailer(
        uint256 _productId,
        uint256 _stock,
        uint256 _costPerItem,
        uint256 _orderQuantity,
        uint256 _leadTime,
        uint256 _productsSold,
        uint256 _shippingCost,
        uint256 _shippingTime,
        string memory _transportMode,
        string[] memory _routes,
        string[] memory _destinations
    ) public onlyOwner {
        retailers.push(
            Retailer({
                productId: _productId,
                stock: _stock,
                costPerItem: _costPerItem,
                orderQuantity: _orderQuantity,
                leadTime: _leadTime,
                productsSold: _productsSold,
                shippingCost: _shippingCost,
                shippingTime: _shippingTime,
                transportMode: _transportMode,
                routes: _routes,
                destinations: _destinations
            })
        );
    }

    function setProductReturns(uint256 _productId, uint256 _productReturns) public onlyOwner {
        company.productId = _productId;
        company.productReturns = _productReturns;
    }
}
