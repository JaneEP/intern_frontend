// ===== Types =====

const SET_USER = "AUTH/SET_USER";
const RESET_USER = "AUTH/RESET_USER";
const CHECKED_AUTH = "AUTH/CHECKED_AUTH";
const ERROR_HANDLE = "AUTH/ERROR_HANDLE";

// ===== Initial state =====

const initialState = {
  user: null,
  isAuth: false,
  checkedAuth: false,
  errors: null,
};

// ===== Reducer =====

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        isAuth: true,
        checkedAuth: true,
      };
    case RESET_USER:
      return {
        ...state,
        user: null,
        isAuth: false,
      };
    case CHECKED_AUTH:
      return {
        ...state,
        checkedAuth: true,
      };
    case ERROR_HANDLE:
      return {
        ...state,
        errors: action.error,
      };

    default:
      return state;
  }
};

// ===== Action =====

export const setUserAction = (user) => ({ type: SET_USER, user });
export const resetUserAction = () => ({ type: RESET_USER });
export const checkedAuthAction = () => ({ type: CHECKED_AUTH });
export const handleErrors = (error) => ({ type: ERROR_HANDLE, error });
