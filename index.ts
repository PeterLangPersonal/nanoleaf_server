import bodyParser from 'body-parser';
import express from 'express';
import { MarketingDataRouter, ProductRouter,  SalesOrderRouter} from './routes';

const app = express();

app.use(express.json());

const port = 8000;

app.listen(port, async () => {
    console.log(`Nanoleaf server started on port ${port}`);
})

app.use('/marketingData', MarketingDataRouter);
app.use('/product', ProductRouter);
app.use('/salesOrder', SalesOrderRouter);
