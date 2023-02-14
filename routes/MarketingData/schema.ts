import { z } from 'zod';

export const marketingDataSchema = z.object({
    dateCreated: z.string(),
    webVisitors: z.number(),
    prClippings: z.number(),
});
