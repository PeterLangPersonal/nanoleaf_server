import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { MarketingDataRouter, ProductRouter,  SalesOrderRouter} from './routes';

const app = express();

app.use(express.json());
// Allowing all requests from every source, but seeing as this is a demo app that only runs on localhost it doesn't matter too much
// To restrict it further would just require specifying the domain the frontend ends up running on once deployed
app.use(cors());

const port = 8000;

app.listen(port, async () => {
    console.log(`Nanoleaf server started on port ${port}`);
})

app.use('/marketingData', MarketingDataRouter);
app.use('/product', ProductRouter);
app.use('/salesOrder', SalesOrderRouter);
