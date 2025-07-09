import axios, { AxiosInstance } from "axios";

export const _axios: AxiosInstance = axios.create({
  baseURL: "https://bikeindex.org/api/v3",
  timeout: 10000,
});
