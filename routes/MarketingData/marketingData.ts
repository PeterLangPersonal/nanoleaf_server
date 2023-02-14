import express from 'express';

import { MarketingData } from '../../db/models/MarketingData';
import { marketingDataSchema } from './schema';

export const MarketingDataRouter = express.Router();

MarketingDataRouter.get('/', async (req, res) => {
    const marketingDataInstances = await MarketingData.findAll();
    
    res.send(marketingDataInstances);
});

MarketingDataRouter.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const marketingData = marketingDataSchema.parse(req.body);

        // Normally I would use a resource directory for database interactions, but these routes are simple enough to keep in the routes themselves
        await MarketingData.create(marketingData);

        res.status(200);
        res.send();
    } catch (e) {
        res.status(400);
        res.send(e);
    }
});
