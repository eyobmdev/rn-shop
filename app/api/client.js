import { create } from "apisauce";
import cache from "../utility/cache";

const client = create({
  baseURL: "http://127.0.0.1:9000/api",
});

const get = client.get;

client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
};

export default client;
