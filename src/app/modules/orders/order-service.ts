import { ProductModel } from "../products/product-model";
import { StationeryOrder } from "./order-interface";
import { OrderModel } from "./order-model";


const createOrderService = async (orderData: StationeryOrder) => {
  const product = await ProductModel.findById(orderData.product);
  return product;
}

const getOrderRevenueService = async () =>{
    const result = await OrderModel.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$totalPrice' }
          }
        },
        { $project: { totalRevenue: 1 } },
    ]);

    const  revenue = result[0]?.totalRevenue || 0
    return revenue; 
}


export const order_Services = {createOrderService,getOrderRevenueService}