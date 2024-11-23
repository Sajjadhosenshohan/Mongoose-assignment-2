import express from 'express';
import { order_Controller } from './order-controller';

const router = express.Router();

router.post('/', order_Controller.createOrder);
router.get('/revenue', order_Controller.getRevenue);

export const orderRoutes = router;