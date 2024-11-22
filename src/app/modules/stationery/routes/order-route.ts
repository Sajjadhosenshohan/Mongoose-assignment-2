import express from 'express';
import { order_Controller } from '../controller/order-controller';
// import { createOrder, getRevenue } from '../controllers/order.controller';
// import { validate } from '../middleware/validate.middleware';

const router = express.Router();

router.post('/', order_Controller.createOrder);
router.get('/revenue', order_Controller.getRevenue);

export const orderRoutes = router;