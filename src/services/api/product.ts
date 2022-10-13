import axios from 'axios';
import endPoints from '@services/api';
import { IProductsRequest } from '@components/FormProducts';

const { products } = endPoints;
const axiosConfig = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
};

const addProduct = async <T>(body: IProductsRequest): Promise<T> => {
  const response = await axios.post(products.postProduct, body, axiosConfig);

  return response.data;
};

const deleteProduct = async (id:number) => {
  const response = await axios.delete(products.deleteProduct(id));
  return response.data;
}

const updateProduct = async (id:number, body: IProductsRequest) => {

  const response = await axios.put(products.putProduct(id), body, axiosConfig);

  return response.data;
}

export { 
  addProduct,
  deleteProduct,
  updateProduct
};
