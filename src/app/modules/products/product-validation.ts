import { z } from 'zod';

export const productSchemaValidate = z.object({
  name: z.string().min(1, 'Product name is required'),
  brand: z.string().min(1, 'Brand name is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.enum(['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology']),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(0, 'Quantity cannot be negative'),
  inStock: z.boolean().default(true)
});