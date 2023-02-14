import express from 'express';

import { Product } from '../../db/models/Product';
import { productSchema } from './schema';

export const ProductRouter = express.Router();

ProductRouter.get('/', async (req, res) => {
    const productInstances = await Product.findAll();
    
    res.send(productInstances);
});

ProductRouter.post('/', async (req, res) => {
    try {
        const product = productSchema.parse(req.body);

        // Normally I would use a resource directory for database interactions, but these routes are simple enough to keep in the routes themselves
        await Product.create(product);

        res.status(200);
        res.send();
    } catch (e) {
        res.status(400);
        res.send(e);
    }
});
