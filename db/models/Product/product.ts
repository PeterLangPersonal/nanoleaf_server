import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../sequelize';

interface ProductAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    sku: string;
    barcode: string;
    parentSku?: string;
    regionCode: string;
    itemType: string;
    supplier: string;
    brand: string;
    packData: {
        packType: string;
        components: string[];
        Metric: {[k: string]: number}; // Typed as generic for futureproofing
        Imperial: {[k: string]: number};
    };
    priceData: {
        Buy: {[k: string]: number};
        Sell: {[k: string]: number};
    };
    variantName: string;
    shortDesc: string;
    stocklink: string;
    lastUpdated: string;
}

export class Product extends Model<ProductAttributes> implements ProductAttributes {
    sku!: string;
    barcode!: string;
    parentSku?: string;
    regionCode!: string;
    itemType!: string;
    supplier!: string;
    brand!: string;
    packData!: {
        packType: string;
        components: string[];
        Metric: {[k: string]: number}; // Typed as generic for futureproofing
        Imperial: {[k: string]: number};
    };
    priceData!: {
        Buy: {[k: string]: number};
        Sell: {[k: string]: number};
    };
    variantName!: string;
    shortDesc!: string;
    stocklink!: string;
    lastUpdated!: string;
}

Product.init({
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
    sku : {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    barcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parentSku: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    regionCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    itemType: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    supplier: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    brand: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    packData: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    priceData: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    variantName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    shortDesc: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    stocklink: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastUpdated: {
      allowNull: false,
      type: DataTypes.DATE,
    },
}, {
    sequelize, modelName: 'products',
});
