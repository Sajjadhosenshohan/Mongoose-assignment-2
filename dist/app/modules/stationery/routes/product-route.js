"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controller/product-controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.product_Controller.createProductController);
router.get('/', product_controller_1.product_Controller.getAllProducts);
router.get('/:productId', product_controller_1.product_Controller.getProductById);
router.put('/:productId', product_controller_1.product_Controller.updateProduct);
router.delete('/:productId', product_controller_1.product_Controller.deleteProduct);
exports.productRoutes = router;
