"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product ID is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required'],
        min: [0, 'Total price must be a positive number'],
    },
}, {
    timestamps: true,
});
// // Pre-save middleware to calculate total price
// orderSchema.pre('save', async function(next) {
//   if (this.isModified('quantity') || this.isModified('product')) {
//     const Product = mongoose.model('Product');
//     const product = await Product.findById(this.product);
//     if (!product) {
//       next(new Error('Product not found'));
//       return;
//     }
//     this.totalPrice = product.price * this.quantity;
//   }
//   next();
// });
// // Static method to get orders by email
// orderSchema.statics.findByEmail = function(email: string) {
//   return this.find({ email }).populate('product');
// };
// // Aggregation pipeline for revenue by category
// orderSchema.statics.getRevenueByCategory = function() {
//   return this.aggregate([
//     {
//       $lookup: {
//         from: 'products',
//         localField: 'product',
//         foreignField: '_id',
//         as: 'product'
//       }
//     },
//     { $unwind: '$product' },
//     {
//       $group: {
//         _id: '$product.category',
//         totalRevenue: { $sum: '$totalPrice' },
//         orderCount: { $sum: 1 }
//       }
//     }
//   ]);
// };
exports.OrderModel = mongoose_1.default.model('Order', orderSchema);
