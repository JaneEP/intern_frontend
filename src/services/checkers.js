import client from "./client";
import { getToken } from "./token-tools";

//  функция сохранения ходов(принимающую аргументом переменную(массив) истории ходов) отправляет запрос на сервер с данными урл-адрес, 
// историю ходов и токен
// записываем в response ответ с сервера

export const saveMoves = async (historyOfMoves) => {
  const response = await client.patch(
    "auth/savemoves",
    {
      historyOfMoves,
    },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );

  return response;
};
