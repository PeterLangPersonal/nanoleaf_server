import axios from 'axios';

import * as marketingData from './data/marketingData.json';
import * as products from './data/productGrid.json';
import * as salesOrders from './data/salesOrders.json';

const marketingDataInstances = Object.values(marketingData.marketingData);
const productInstances = products.productSKU;
const salesOrderInstances = salesOrders.salesOrders;

// Bulk upload makes more sense for what we're doing here, however single upload makes more sense for a reusable route and building bulk upload later is trivial
marketingDataInstances.forEach(async (marketingDataInstance) => {
    await axios.post('http://localhost:8000/marketingData/', marketingDataInstance, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'  
        },
    });
});

Object.keys(productInstances).map((sku) => {
    return {
        sku,
        ...productInstances[sku as keyof typeof productInstances],
    };
}).forEach(async (formattedProductInstance) => {
    await axios.post('http://localhost:8000/product/', formattedProductInstance, {
        headers: {
            'Content-Type': 'application/json' ,
        },
    });
});

Object.keys(salesOrderInstances).map((orderId) => {
    return {
        orderId,
        ...salesOrderInstances[orderId as keyof typeof salesOrderInstances],
    };
}).forEach(async (formattedSalesOrderInstances) => {
    console.log(formattedSalesOrderInstances);
    await axios.post('http://localhost:8000/salesOrder/', formattedSalesOrderInstances, {
        headers: {
            'Content-Type': 'application/json' ,
        },
    });
});