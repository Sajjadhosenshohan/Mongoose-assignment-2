import express from 'express';
import { product_Controller } from './product-controller';


const router = express.Router();

router.post('/', product_Controller.createProductController);
router.get('/', product_Controller.getAllProducts);
router.get('/:productId', product_Controller.getProductById);
router.put('/:productId', product_Controller.updateProduct);
router.delete('/:productId', product_Controller.deleteProduct);

export const productRoutes = router;