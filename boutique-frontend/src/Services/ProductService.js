
import axios from 'axios';

const Product_API_Base_URL = "http://localhost:8080/api/v1/Products"
class ProductService{

   getProduct(){
    return axios.get(Product_API_Base_URL);
   } 

   CreateProduct(product){
      return axios.post(Product_API_Base_URL, product);
   }

   getProductById(productId){
      return axios.get(Product_API_Base_URL + '/' + productId);
   }

   UpDateProduct(product, productId){
      return axios.put(Product_API_Base_URL + '/' + productId, product);
   }

   DeleteProduct(productId){
      return axios.delete(Product_API_Base_URL + '/' + productId);
   }
}

export default new ProductService()