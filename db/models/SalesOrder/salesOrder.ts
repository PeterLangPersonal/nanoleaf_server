import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../sequelize';

interface SalesOrderAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    orderId: string;
    dateCreated: string;
    salesChannel: string;
    isoCurrency: string;
    subtotal: number;
    discountAmt: number;
    shipping: number;
    taxes: {[key: string]: number};
    taxType: string;
    total: number;
    lineItems: {[key: string]: number};
    fulfillments: (string | number | null)[][];
    payments: (string | number)[][]; 
};

export class SalesOrder extends Model<SalesOrderAttributes> implements SalesOrderAttributes {
    orderId!: string;
    dateCreated!: string;
    salesChannel!: string;
    isoCurrency!: string;
    subtotal!: number;
    discountAmt!: number;
    shipping!: number;
    taxes!: {[key: string]: number};
    taxType!: string;
    total!: number;
    lineItems!: {[key: string]: number};
    fulfillments!: (string | number | null)[][];
    payments!: (string | number)[][]; 
};

SalesOrder.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    orderId: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    dateCreated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    salesChannel: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    isoCurrency: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    subtotal: {
        allowNull: false,
        type: DataTypes.FLOAT,
    },
    discountAmt: {
        allowNull: false,
        type: DataTypes.FLOAT,
    },
    shipping: {
        allowNull: false,
        type: DataTypes.FLOAT,
    },
    taxes: {
        allowNull: false,
        type: DataTypes.JSON,
    },
    taxType: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    total: {
        allowNull: false,
        type: DataTypes.FLOAT,
    },
    lineItems: {
        allowNull: false,
        type: DataTypes.JSON,
    },
    fulfillments: {
        allowNull: false,
        type: DataTypes.JSON,
    },
    payments: {
        allowNull: false,
        type: DataTypes.JSON,
    },
}, {
    sequelize, modelName: 'sales_orders',
});