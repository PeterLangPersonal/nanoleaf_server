import express from 'express';

import { SalesOrder } from '../../db/models/SalesOrder';
import { salesOrderSchema } from './schema';

export const SalesOrderRouter = express.Router();

SalesOrderRouter.get('/', async (req, res) => {
    const salesOrderInstances = await SalesOrder.findAll();
    
    res.send(salesOrderInstances);
});

SalesOrderRouter.post('/', async (req, res) => {
    try {
        const salesOrder = salesOrderSchema.parse(req.body);

        // Normally I would use a resource directory for database interactions, but these routes are simple enough to keep in the routes themselves
        await SalesOrder.create(salesOrder);

        res.status(200);
        res.send();
    } catch (e) {
        res.status(400);
        res.send(e);
    }
});
