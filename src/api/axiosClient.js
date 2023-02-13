import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: apiConfig.apiKey,
  },
  // paramsSerializer: (params) =>
  //   queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
  // paramsSerializer: {
  //   encode: parse,
  //   serialize: stringify,
  // },
});

axiosClient.interceptors.request.use(async (config) => {
  console.log(config);
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
