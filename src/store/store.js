import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./auth/auth";
import reducer from "./checkers/reducer";

// combineReducers - разделяем редьюсеры на отдельные функции, каждая из кот управляет независимыми частями стейта, и затем нам нужно эти редьюсеры объединить в 1 функцию
//т.к. главный редьюсер должен быть один в приложении, чтобы приступить к createStore
//Результирующий редьюсер вызывает каждый дочерний редьюсер и собирает их результаты в один объект состояния.
// Состояние, создаваемое combineReducers(), представляет собой состояния каждого редьюсера под их ключами,
// переданными в combineReducers()
//Аргументами combineReducers явл объект,значения которого соответствуют различным функциям редьюсера
const rootReducer = combineReducers({
  auth: authReducer,
  checkers: reducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //мы говорим стору применять эти миддлвары/принимать промежуточные слои, чтобы можно было передавать запускать санки, получать из них экшены и передавать дальше в редьюсер
);
// applyMiddleware - разработчики редакс сделали такую возможность, чтобы можно было вклиниться в конвеер между стором и редьюсером
// composeWithDevTools - это расширение 
export default store;
