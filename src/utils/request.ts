import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VITE_APP_API,
  timeout: 5000,
});
instance.interceptors.request.use(function(config) {
  console.log(config);
  return config;
}, function(error) {
  console.log(error);
  return Promise.reject(error);
});
instance.interceptors.response.use(function(res) {
  console.log(res);
  return res;
}, function(error) {
  console.log(error);
});
const get = (url: string, params: any) => {
  return instance({
    url: `${url}`,
    method: "get",
    params,
  });
};
const post = (url: string, data: any) => {
  return instance({
    url: `${url}`,
    method: "post",
    data,
  });
};
const del = (url: string, id: string) => {
  return instance({
    url: `${url}/${id}`,
    method: "delete",
  });
};
export default {
  get,
  post,
  del,
};