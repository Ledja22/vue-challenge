import { Property } from './../interfaces/property';
import axios, { AxiosResponse } from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/items", // JSON Server URL
  headers: {
    "Content-Type": "application/json",
  },
});

const PropertyService = {
  getAll: () => API.get("/").then((response: AxiosResponse<any>) => response.data),
  create: (property: Property) => API.post("/", property).then((response: AxiosResponse<any>) => response.data),
  update: (property: Property) => API.patch(`/${property.id}`, property).then((response: AxiosResponse<any>) => response.data),
  delete: (id: string) => API.delete(`/${id}`).then((response: AxiosResponse<any>) => response.data),
};

export default PropertyService;
