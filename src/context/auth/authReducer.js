import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload.jwt,
        loading: false,
        user: action.payload.user.username,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case USER_LOADED:
      const obj = JSON.parse(localStorage.getItem("user"));
      return {
        ...state,
        user: obj.user.username,
        isAuthenticated: true,
        token: obj.jwt,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
