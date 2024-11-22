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
exports.product_Controller = void 0;
const product_validation_1 = require("../validation/product-validation");
const product_service_1 = require("../services/product-service");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // validate using zod
        const refineData = product_validation_1.productSchemaValidate.parse(productData);
        const product = yield product_service_1.product_Services.createProductService(refineData);
        res.status(201).json({
            message: 'Product created successfully',
            success: true,
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Failed to create product',
            success: false,
            error: error.message,
            stack: error.stack,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm, category } = req.query;
        const products = yield product_service_1.product_Services.getAllProductService(searchTerm, category);
        res.status(200).json({
            message: 'Products retrieved successfully',
            status: true,
            data: products,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Failed to retrieve products',
            success: false,
            error: error.message,
            stack: error.stack,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield product_service_1.product_Services.getAProductService(productId);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
                error: 'Resource not found',
            });
        }
        res.status(200).json({
            message: 'Product retrieved successfully',
            status: true,
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Failed to retrieve product',
            success: false,
            error: error.message,
            stack: error.stack,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const product = yield product_service_1.product_Services.updateAProductService(productId, updateData);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
                error: 'Resource not found',
            });
        }
        res.status(200).json({
            message: 'Product updated successfully',
            status: true,
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Failed to update product',
            success: false,
            error: error.message,
            stack: error.stack,
        });
    }
});
//   export const deleteProduct = async (req: Request, res: Response) => {
//     try {
//       const { productId } = req.params;
//       const product = await Product.findByIdAndDelete(productId);
//       if (!product) {
//         return res.status(404).json({
//           message: 'Product not found',
//           success: false,
//           error: 'Resource not found',
//         });
//       }
//       res.status(200).json({
//         message: 'Product deleted successfully',
//         status: true,
//         data: {},
//       });
//     } catch (error: any) {
//       res.status(400).json({
//         message: 'Failed to delete product',
//         success: false,
//         error: error.message,
//         stack: error.stack,
//       });
//     }
//   };
exports.product_Controller = { createProductController, getAllProducts, getProductById, updateProduct };
