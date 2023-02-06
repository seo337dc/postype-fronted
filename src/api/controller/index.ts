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

export const getSearch = async (keyword: string) => {
  const url = `${URL}/search/photos?page=1&query=${keyword}&client_id=${ACCESS_KEY}`;
  return await axios.get(url);
};

export const getInitSearch = async (page: number) => {
  const url = `${URL}/photos?page=${page}&client_id=${ACCESS_KEY}`;
  return await axios.get(url);
};

export const getPhotoInfo = async (id: string) => {
  const url = `${URL}/photos/${id}?client_id=${ACCESS_KEY}`;
  const { data } = await axios.get(url);
  return data;
};
