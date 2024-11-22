"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controller/order-controller");
// import { createOrder, getRevenue } from '../controllers/order.controller';
// import { validate } from '../middleware/validate.middleware';
const router = express_1.default.Router();
router.post('/', order_controller_1.order_Controller.createOrder);
router.get('/revenue', order_controller_1.order_Controller.getRevenue);
exports.orderRoutes = router;
