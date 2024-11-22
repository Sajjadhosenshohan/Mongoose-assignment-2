import { StationeryOrder } from "../interface/order-interface";
import { OrderModel } from "../model/order-model";
import { ProductModel } from "../model/product-model";


const createOrderService = async (orderData: StationeryOrder)=>{
    const result = await ProductModel.findById(orderData.product);
    return result;
}

const getOrderRevenueService = async ()=>{
    const result = await OrderModel.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$totalPrice' }
          }
        }
    ]);

    const  revenue = result[0]?.totalRevenue || 0
    return revenue; 
}


export const order_Services = {createOrderService,getOrderRevenueService}