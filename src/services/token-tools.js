// мы пишим функции, в кот обращаемся к глобальному объекту window и к его методу localStorage и :
//1. записываем токен в локалстораж
//2. забираем токен
//3. удаляем токен

// а где мы берем token изначально? чтобы к нему обратиться

export const setToken = (token) => {
  window && window.localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = window && window.localStorage.getItem("token");
  return token;
};

export const resetToken = () => {
  window && window.localStorage.removeItem("token");
};
