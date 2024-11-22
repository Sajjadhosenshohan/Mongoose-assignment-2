import { model, Schema } from 'mongoose';
import { StationeryProduct } from '../interface/product-interface';

const productSchema = new Schema<StationeryProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// // Pre-save middleware to update inStock status
// productSchema.pre('save', function(next) {
//   this.inStock = this.quantity > 0;
//   next();
// });

// // Pre-remove middleware to check for existing orders
// productSchema.pre('remove', async function(next) {
//   const Order = mongoose.model('Order');
//   const orderCount = await Order.countDocuments({ product: this._id });
  
//   if (orderCount > 0) {
//     next(new Error('Cannot delete product with existing orders'));
//   }
//   next();
// });

// // Static method to get products by category
// productSchema.statics.findByCategory = function(category: string) {
//   return this.find({ category });
// };

// // Static method to get low stock products
// productSchema.statics.findLowStock = function(threshold: number = 10) {
//   return this.find({ quantity: { $lte: threshold } });
// };

export const ProductModel = model<StationeryProduct>('Product', productSchema);