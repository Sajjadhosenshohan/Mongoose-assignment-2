import mongoose, { Schema } from 'mongoose';
import { StationeryOrder } from '../interface/order-interface';

const orderSchema = new Schema<StationeryOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    product: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

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

export const OrderModel = mongoose.model<StationeryOrder>('Order', orderSchema);