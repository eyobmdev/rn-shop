import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const client = create({
  baseURL: "http://127.0.0.1:9000/api",
});

client.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authStorage) return;
  request.headers["x-auth-token"] = authToken;
});

const get = client.get;

client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default client;
