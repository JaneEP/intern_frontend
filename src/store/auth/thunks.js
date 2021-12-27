import { getToken, resetToken } from "../../services/token-tools";
import {
  checkedAuthAction,
  resetUserAction,
  setUserAction,
  handleErrors,
} from "./auth";
import { auth, login, registration } from "../../services/auth";
import { getCheckedAuthSelector } from "./selectors";
import { SET_HISTORY_OF_MOVE } from "../checkers/action";

//Промежуточное ПО Redux Thunk позволяет вам писать создателей действий, которые возвращают функцию вместо действия . Преобразователь может использоваться для задержки отправки действия или для отправки только при выполнении определенного условия.

// это санккреэйтор? (ф-я,кот может что-то принимать,тут вроде ничего,и возвр санку?)
export const logoutThunk = () => (dispatch) => {
  resetToken(); // удаление токена из локалстораджа на компе у юзера при выходе с акка
  dispatch(resetUserAction()); //удаляем все данные юзера в редаксе
};

export const errorHandlerThunk = e => (dispatch) => {
  dispatch(handleErrors(e.response.data.message));
  dispatch(logoutThunk());
}

//объявляем функцию(санку) loginThunk, принимающую аргументами (имя,пароль,почту), диспатчит экшены

export const loginThunk = (name, email, password) => async (dispatch) => {
  try {
    const response = await login(name, email, password); // оператор await ожидает асинхр запрос авторизации юзера? после завершения асинхр операции(когда получили данные юзера) await возвр результат операции,т.е. юзера с мылом/паролем/именем
    const history = response.data.user.moves; // тут в переменную хистори записываем ответ с серва,кот содержит данные ходов юзера
    dispatch(setUserAction(response.data.user)); // происходит диспатч вызова экшенкреэйторов,а экшенкреэйторы возвращают обычные экшены
    dispatch(SET_HISTORY_OF_MOVE(history)); // тут диспатчим экшенкреэйтор, создающий историю ходов?
  } catch (e) {
    dispatch(errorHandlerThunk(e));
  }
};
export const registrationThunk =
  (name, email, password, passwordRepiet) => async (dispatch) => {
    try {
      let response = await registration(name, email, password, passwordRepiet);

      console.log(response);
      // if (response.data.status !== "notokey") {
      alert("Пользователь успешно создан");
      // } else {
      //   alert(response.data.message);
      // }

      // let message = response.data.message;
      // if (response.data.errors) {
      //   for (let error of response.data.errors.errors) {
      //     console.log(error);
      //     message += error.msg;
      //   }
      // }
      // alert(message);
    } catch (e) {
      dispatch(errorHandlerThunk(e));
    }
  };

export const authThunk = () => async (dispatch, getState) => {
  try {
    const checkedAuth = getCheckedAuthSelector(getState());

    if (getToken() && !checkedAuth) {
      const response = await auth();
      const history = response.data.user.moves;
      dispatch(setUserAction(response.data.user));
      dispatch(SET_HISTORY_OF_MOVE(history));
      alert("Ваши ходы успешно сохранены!");
    } else {
      dispatch(checkedAuthAction()); //считаем,что проверку сделалаи на залогин юзера
    }
  } catch (e) {
    dispatch(errorHandlerThunk(e));
  }
};
