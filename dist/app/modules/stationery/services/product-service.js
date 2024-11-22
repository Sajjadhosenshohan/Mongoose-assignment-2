"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_Services = void 0;
const product_model_1 = require("../model/product-model");
const createProductService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductService = (searchTerm, category) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (category) {
        query = { category };
    }
    else if (searchTerm) {
        query = {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        };
    }
    const products = yield product_model_1.ProductModel.find(query);
    return products;
});
// get a product info by productId
const getAProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: productId });
    return result;
});
// update a product info by productId
const updateAProductService = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.ProductModel.findByIdAndUpdate(productId, updateData, { new: true, runValidators: true });
    return product;
});
// // delete a student info by id
// const deleteStudentInfo = async (studentId:string) =>{
//     // console.log(studentId)
//     const result  = await StudentModel.updateOne({id: studentId}, {isDeleted: true})
//     // console.log('service ', result)
//     return result
// }
exports.product_Services = { createProductService, getAllProductService, getAProductService, updateAProductService };
