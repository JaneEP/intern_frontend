const axios = require("axios");

//настроили базовый урл
// настройка для всех запросов

const client = axios.create({
  baseURL: 'http://localhost:5005/api'
});

export default client

// создаем базовый урл, к кот потом через \ добавляем все запросы
// в качестве axios исп client