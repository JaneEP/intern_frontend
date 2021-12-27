import client from "./client";
import { getToken, setToken } from "./token-tools";

// отправляем запросы на серв, в кот записываем данные (имя, почту, пароль) по конкретному адресу

export const login = async (name, email, password) => {
  const response = await client.post("/auth/login", {
    name,
    email,
    password,
  });
  setToken(response.data.token);// взяла с сервера токен и установила его в локалстораж
  return response;
};

export const registration = async (name, email, password, passwordRepiet) => {
  const response = await client.post("/auth/registration", {
    name,
    email,
    password,
    passwordRepiet,
  });
  return response;
};

export const auth = async () => {
  const response = await client.get("/auth/user", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return response;
};
