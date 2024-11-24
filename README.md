# 📚 Stationery Shop API

A robust REST API for managing a stationery shop's inventory and orders, built with Express.js, TypeScript, and MongoDB.

## 🚀 Features

- **Product Management**
  - Create, read, update, and delete stationery products
  - Search products by name, brand, or category
  - Track inventory levels and stock status

- **Order Processing**
  - Place orders with automatic inventory updates
  - Calculate total price based on quantity
  - Prevent orders for out-of-stock items

- **Revenue Analytics**
  - Calculate total revenue from all orders
  - Advanced aggregation pipelines

## 🛠️ Technologies Used

- Node.js & Express.js
- TypeScript
- MongoDB & Mongoose
- Zod (Schema Validation)
- CORS
- Dotenv

## 🏗️ Project Structure

```
src/
├── app
    |--config
        |-- index.ts
    |-- modules
        |--orders
            |--order-controller.ts
            |--order-interface.ts
            |--order-model.ts
            |--order-route.ts
            |--order-service.ts
            |--order-validation.ts
        |-- products
            |--product-controller.ts
            |--product-interface.ts
            |--product-model.ts
            |--product-route.ts
            |--product-service.ts
            |--product-validation.ts
|-- app.ts
|-- server.ts
```

## 🚦 API Endpoints

### Products

```
POST   /api/products          # Create a product
GET    /api/products          # Get all products
GET    /api/products/:id      # Get product by ID
PUT    /api/products/:id      # Update product
DELETE /api/products/:id      # Delete product
```

### Orders

```
POST   /api/orders            # Create an order
GET    /api/orders/revenue    # Get total revenue
```

## 🛠️ Setup & Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd stationery-shop-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/stationery-shop
NODE_ENV=development
```

4. **Start the server**

```bash
# Development
npm run start:dev

# Production
npm run build
npm start
```

## 📝 API Documentation

### Create Product

```http
POST /api/products
Content-Type: application/json

{
  "name": "Notebook",
  "brand": "Moleskine",
  "price": 15,
  "category": "Office Supplies",
  "description": "A high-quality notebook for professionals.",
  "quantity": 200
}
```

### Place Order

```http
POST /api/orders
Content-Type: application/json

{
  "email": "customer@example.com",
  "product": "product_id_here",
  "quantity": 2
}
```

## 🔒 Error Handling

The API implements comprehensive error handling:

- Validation errors (400)
- Not found errors (404)
- Server errors (500)
- Custom error messages for business logic

Example error response:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": "ValidationError",
  "stack": "..." // Only in development
}
```

## 🧪 Data Validation

- Product schema validation using Zod
- Order validation with business rules
- Input sanitization and type checking

## 📈 Performance

- Efficient MongoDB queries
- Proper indexing
- Middleware for common operations

## 🔐 Security

- Input validation
- Error message sanitization
- CORS configuration
- Environment variable protection

## 👥 Authors

- mdshohansajjad@gmail.com
