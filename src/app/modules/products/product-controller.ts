import { Request, Response } from 'express';
import { product_Services } from './product-service';
import { productSchemaValidate } from './product-validation';


const createProductController = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

     // validate using zod
     const refineData = productSchemaValidate.parse(productData)

    const product = await product_Services.createProductService(refineData)
    
    res.status(201).json({
      message: 'Product created successfully',
      success: true,
      data: product,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to create product',
      success: false,
      error: error.message,
      stack: error.stack,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
      const { searchTerm, category } = req.query as { searchTerm?: string; category?: string };
      
      const products = await product_Services.getAllProductService(searchTerm, category)

      res.status(200).json({
        message: 'Products retrieved successfully',
        status: true,
        data: products,
      });
    } catch (error: any) {
      res.status(400).json({
        message: 'Failed to retrieve products',
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
};


const getProductById = async (req: Request, res: Response): Promise<any> => {
    try {
      const { productId } = req.params;
      const product = await product_Services.getAProductService(productId)
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
    } catch (error: any) {
      res.status(400).json({
        message: 'Failed to retrieve product',
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
  };
  
const updateProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      const { productId } = req.params;
      const updateData = req.body;
  
        const product = await product_Services.updateAProductService(productId,updateData)

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
    } catch (error: any) {
      res.status(400).json({
        message: 'Failed to update product',
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
  };
  
const deleteProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      const { productId } = req.params;
        
      const product = await product_Services.deleteProductService(productId);

      if (!product) {
        return res.status(404).json({
          message: 'Product not found',
          success: false,
          error: 'Resource not found',
        });
      }
  
      res.status(200).json({
        message: 'Product deleted successfully',
        status: true,
        data: {},
      });
    } catch (error: any) {
      res.status(400).json({
        message: 'Failed to delete product',
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
  };

export const product_Controller = {
    createProductController,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
  