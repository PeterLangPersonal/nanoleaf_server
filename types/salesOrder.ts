export type SalesOrderAttributes = {
    dateCreated: string;
    salesChannel: string;
    isoCurrency: string;
    subtotal: number;
    discountAmt: number;
    shipping: number;
    taxes: {[key: string]: number}[];
    taxType: string;
    total: number;
    lineItems: {[key: string]: number};
    fulfillments: (string | number)[][];
    payments: (string | number)[]; 
};
