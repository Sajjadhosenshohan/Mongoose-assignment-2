"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/stationery/routes/product-route");
const order_route_1 = require("./app/modules/stationery/routes/order-route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// // routes
app.use('/api/products', product_route_1.productRoutes);
app.use('/api/orders', order_route_1.orderRoutes);
app.get('/', (req, res) => {
    console.log("server is running");
    res.send('Hello World!');
});
exports.default = app;
