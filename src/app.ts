
import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/stationery/routes/product-route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// // routes
app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);


app.get('/', (req: Request, res: Response) => {
  console.log("server is running")
  res.send('Hello World!');
});
export default app;