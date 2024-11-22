import { Types } from "mongoose";

export type StationeryOrder = {
    email: string;
    product: Types.ObjectId;
    quantity: number;
    totalPrice: number;
}