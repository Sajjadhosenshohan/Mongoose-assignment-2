"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_Controller = void 0;
const order_service_1 = require("./order-service");
const order_model_1 = require("./order-model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const product = yield order_service_1.order_Services.createOrderService(orderData);
        if (!product) {
            res.status(404).json({
                message: 'Product not found',
                success: false,
                error: 'Resource not found',
            });
            return;
        }
        if (product.quantity < orderData.quantity) {
            res.status(400).json({
                message: 'Insufficient stock',
                success: false,
                error: 'Validation Error',
            });
            return;
        }
        const order = yield order_model_1.OrderModel.create(orderData);
        // Update product quantity
        product.quantity = product.quantity - orderData.quantity;
        yield product.save();
        res.status(201).json({
            message: 'Order created successfully',
            status: true,
            data: order,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: 'Failed to create order',
                success: false,
                error: error.message,
                stack: error.stack,
            });
        }
    }
});
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield order_service_1.order_Services.getOrderRevenueService();
        //   console.log(result[0],62)
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: {
                totalRevenue: revenue
            }
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: 'Failed to calculate revenue',
                success: false,
                error: error.message,
                stack: error.stack
            });
        }
    }
});
exports.order_Controller = { createOrder, getRevenue };
