export type ProductAttributes = {
    barcode: string;
    parentSku: string;
    regionCode: number;
    itemType: string;
    supplier: string;
    brand: string;
    packData: {
        packType: string;
        components: string[];
        Metric: {[key: string]: number}[]; // Typed as generic for futureproofing
        Imperial: {[key: string]: number}[];
    };
    priceData: {
        Buy: {[key: string]: number}[];
        Sell: {[key: string]: number}[];
    };
    variantName: string;
    shortDesc: string;
    stockLink: string;
    lastUpdated: string;
}