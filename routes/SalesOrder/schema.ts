import { z } from 'zod';

export const salesOrderSchema = z.object({
    orderId: z.string(),
    dateCreated: z.string(),
    salesChannel: z.string(),
    isoCurrency: z.string(),
    subtotal: z.number(),
    discountAmt: z.number(),
    shipping: z.number(),
    taxes: z.record(z.number()),
    taxType: z.string(),
    total: z.number(),
    lineItems: z.record(z.number()),
    fulfillments: z.array(z.array(z.string().or(z.number()).nullable())),
    payments: z.array(z.array(z.string().or(z.number()))),
});
