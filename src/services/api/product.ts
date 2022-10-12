import axios from 'axios';
import endPoints from '@services/api';
import { IProductsRequest } from '@components/FormProducts';

const { products } = endPoints;

const addProduct = async <T>(body: IProductsRequest): Promise<T> => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(products.postProduct, body, config);

  return response.data;
};

const deleteProduct = async (id:number) => {
  const response = await axios.delete(products.deleteProduct(id));
  return response.data;
}

export { 
  addProduct,
  deleteProduct
};
