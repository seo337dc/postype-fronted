import axios from 'axios';

const URL = process.env.URL;
const ACCESS_KEY = process.env.ACCESS_KEY;

export const getSearch = async (keyword: string, page: number) => {
  const url = `${URL}/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}`;
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
