import { createAction } from "redux-act";

export const SET_HISTORY_OF_MOVE = createAction("CHECKERS/SET_HISTORY_OF_MOVE");

export const ON_CHACKER_CLICK = createAction("ON_CHACKER_CLICK");

export const ON_CELL_CLICK = createAction("ON_CELL_CLICK");

export const CREATE_RND_POS = createAction("CREATE_RND_POS");

export const MOVE_BACK = createAction("MOVE_BACK");


//Функция createAction на вход принимает тип действия и возвращает создателя действия для этого типа. 
//Создатель действия может быть вызван либо без аргументов, либо с некоторым аргументом (полезная нагрузка), 
//значение которого будет помещено в поле payload

