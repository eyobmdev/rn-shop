import client from "./client";

const login = client.post("/auth", { email, password });

export default {
  login,
};
