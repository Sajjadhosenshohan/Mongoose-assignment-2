"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchemaValidate = void 0;
const zod_1 = require("zod");
exports.productSchemaValidate = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Product name is required'),
    brand: zod_1.z.string().min(1, 'Brand name is required'),
    price: zod_1.z.number().min(0, 'Price must be a positive number'),
    category: zod_1.z.enum(['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology']),
    description: zod_1.z.string().min(1, 'Description is required'),
    quantity: zod_1.z.number().min(0, 'Quantity cannot be negative'),
    inStock: zod_1.z.boolean().default(true)
});
