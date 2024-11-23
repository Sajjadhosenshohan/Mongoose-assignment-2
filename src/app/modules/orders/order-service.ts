import { ProductModel } from "../products/product-model";
import { StationeryOrder } from "./order-interface";
import { OrderModel } from "./order-model";



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
        },
        { $project: { totalRevenue: 1 } },
    ]);

    console.log(result,23)

    const  revenue = result[0]?.totalRevenue || 0
    return revenue; 
}


export const order_Services = {createOrderService,getOrderRevenueService}