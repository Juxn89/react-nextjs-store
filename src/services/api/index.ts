const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const LIMIT = 5;
const OFFSET = 5;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getList: (limit: Number = LIMIT, offset: Number = OFFSET) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getAllProducts: () => `${API}/api/${VERSION}/products`,
    getProduct: (id: Number) => `${API}/api/${VERSION}/products/${id}`,
    postProduct: `${API}/api/${VERSION}/products`,
    putProduct: (id: Number) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id: Number) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getList: (limit: Number = LIMIT) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getList: (limit: Number = LIMIT) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategory: `${API}/api/${VERSION}/categories`,
    getCategory: (id: Number) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id: Number) => `${API}/api/${VERSION}/categories/${id}`,
    getProductsByCategorie: (id: Number) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename: String) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
