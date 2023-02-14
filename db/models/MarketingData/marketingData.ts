import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../sequelize';

interface MarketingDataAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    dateCreated: string;
    webVisitors: number;
    prClippings: number;
};

export class MarketingData extends Model<MarketingDataAttributes> implements MarketingDataAttributes {
    dateCreated!: string;
    webVisitors!: number;
    prClippings!: number;
}

MarketingData.init({
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
    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    webVisitors: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    prClippings: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize, modelName: 'marketing_datas',
});
