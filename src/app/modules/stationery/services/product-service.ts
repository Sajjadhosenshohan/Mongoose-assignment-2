import { StationeryProduct } from "../interface/product-interface";
import { ProductModel } from "../model/product-model";

const createProductService = async (product: StationeryProduct)=>{

    const result = await ProductModel.create(product);
    return result;
}

const getAllProductService = async (searchTerm: string | undefined, category:string | undefined)=>{
    let query = {};
  
    if (category) {
        query = { category };

    } else if (searchTerm) {
        query = {
          $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } },
            { category: { $regex: searchTerm, $options: 'i' } },
          ],
        };
      }
  
      const products = await ProductModel.find(query);
      return products
}

// get a product info by productId
const getAProductService = async (productId:string) =>{
    const result  = await ProductModel.findOne({_id: productId})
    return result
}

  
// update a product info by productId
const updateAProductService = async (productId:string, updateData: StationeryProduct) =>{

    const product = await ProductModel.findByIdAndUpdate(
        productId,
        updateData,
        { new: true, runValidators: true }
    );
    return product
}

// // delete a student info by id
// const deleteStudentInfo = async (studentId:string) =>{
//     // console.log(studentId)
//     const result  = await StudentModel.updateOne({id: studentId}, {isDeleted: true})
//     // console.log('service ', result)
//     return result
// }

export const product_Services = {createProductService, getAllProductService,getAProductService,updateAProductService}