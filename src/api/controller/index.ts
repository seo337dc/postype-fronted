import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { TUserDto } from '@Type/user';

const URL = process.env.URL;
const ACCESS_KEY = process.env.ACCESS_KEY;

export const loginFn = async () => {
  return await axios.post('https://api.sixshop.com/login', {});
};

export const getUserInfo = async (userId: string): Promise<AxiosResponse<TUserDto>> => {
  return await axios.get(`https://api.sixshop.com/users/${userId}`);
};

export const getProductList = (page: number) => {
  const params = {
    page,
    size: 10,
  };
  return axios.get('https://api.sixshop.com/products', { params }).then((res) => res.data);
};

export const getProductDetail = (id: number) => {
  return axios.get(`https://api.sixshop.com/products/${id}`).then((res) => res.data);
};

export const getSearch = (keyword: string) => {
  if (keyword) {
    const url = `${URL}/search/photos?client_id=${ACCESS_KEY}&page=1`;
    return axios.get(url).then((res) => res.data);
  } else {
    const url = `${URL}/photos?client_id=${ACCESS_KEY}&page=1`;
    return axios.get(url).then((res) => res.data);
  }
};

export const getInitSearch = async () => {
  const url = `${URL}/photos?client_id=${ACCESS_KEY}&page=1`;
  return await axios.get(url);
};
