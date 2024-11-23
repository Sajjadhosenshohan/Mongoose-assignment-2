import { Request, Response } from 'express';
import { order_Services } from './order-service';
import { OrderModel } from './order-model';



const createOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const orderData = req.body;
    
    const product = await order_Services.createOrderService(orderData);
    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
        success: false,
        error: 'Resource not found',
      });
    }

    if (product.quantity < orderData.quantity) {
      return res.status(400).json({
        message: 'Insufficient stock',
        success: false,
        error: 'Validation Error',
      });
    }

    const order = await OrderModel.create(orderData);
    
    // Update product quantity
    product.quantity = product.quantity - orderData.quantity;
    await product.save();

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: order,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to create order',
      success: false,
      error: error.message,
      stack: error.stack,
    });
  }
};


const getRevenue = async (req: Request, res: Response) => {
    try {
      
    const revenue = await order_Services.getOrderRevenueService()

    //   console.log(result[0],62)
  
      res.status(200).json({
        message: 'Revenue calculated successfully',
        status: true,
        data: {
          totalRevenue: revenue
        }
      });
    } catch (error: any) {
      res.status(400).json({
        message: 'Failed to calculate revenue',
        success: false,
        error: error.message,
        stack: error.stack
      });
    }
  };

export const order_Controller = {createOrder,getRevenue}