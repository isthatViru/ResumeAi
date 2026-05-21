import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const register = async ({ username, email, password }) => {
  const response = await api.post("/api/signup", {
    username,
    email,
    password,
  });
  return response.data;
};

export const login = async ({ email, password }) => {
  const response = await api.post("/api/login", {
    email,
    password,
  });
  return response.data;
};

export const logout = async () => {
  const response = await api.get("/api/logout");
  return response.data;
};

export const getme = async () => {
  const response = await api.get("/api/get-me");
  return response.data;
};
