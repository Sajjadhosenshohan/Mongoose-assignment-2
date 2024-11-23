
import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/products/product-route';
import { orderRoutes } from './app/modules/orders/order-route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// // routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.get('/', (req: Request, res: Response) => {
  console.log("server is running")
  res.send('Hello World!');
});


//custom error handler
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Something went wrong',
  });
});

//global error handler
interface ErrorWithStatus extends Error {
  status?: number;
}

app.use(
  (error: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    if (error) {
      res.status(400).json({
        success: false,
        message:'Something went wrong',
      });
    } else {
      next();
    }
  },
);
export default app;