export const getIsAuthSelector = (state) => state.auth.isAuth;//тут устанавливаем свойство "авторизован?" ? если да, идем на ROOT_PATH(шашки)

export const getUserSelector = (state) => state.auth.user; // тут селектор для юзеров, его импортим в top-panel.js, там создаем эту переменную

export const getCheckedAuthSelector = (state) => state.auth.checkedAuth;// проверка на авторизацию, прошел или нет

export const getAuthErrorSelector = (state) => state.auth.errors; // работаем с ошибками

// селекторы тут - это ф-ции кот принимают стейт и возвращают из него что-то,что мы указываем
