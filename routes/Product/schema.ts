import { z } from 'zod';

export const productSchema = z.object({
    sku: z.string(),
    barcode: z.string(),
    parentSku: z.string().optional(),
    regionCode: z.string(),
    itemType: z.string(),
    supplier: z.string(),
    brand: z.string(),
    packData: z.object({
        packType: z.string(),
        components: z.array(z.string()),
        Metric: z.record(z.number()),
        Imperial: z.record(z.number()),
    }),
    priceData: z.object({
        Buy: z.record(z.number()),
        Sell: z.record(z.number()),
    }),
    variantName: z.string(),
    shortDesc: z.string(),
    stocklink: z.string(),
    lastUpdated: z.string(),
});
