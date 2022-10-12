import axios from 'axios';
import endPoints from '@services/api';
import { IProductsRequest } from '@components/FormProducts';

const addProduct = async <T>(body: IProductsRequest): Promise<T> => {
  const { products } = endPoints;
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(products.postProduct, body, config);

  return response.data;
};

export { addProduct };
