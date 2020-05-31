import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  //load user
  const loadUser = () => {
    if(localStorage.user) {
      dispatch({type: USER_LOADED});
    }
  }

  //register user
  const register = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:1337/auth/local/register",
        formData
      );
      console.log(res.data);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      console.log(err);
      dispatch({ type: REGISTER_FAIL, payload: "error 400" });
    }
  };
  //login user
  const login = async ({email, password}) => {
    try {
      const res = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password
      });
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      console.log(err);
      dispatch({ type: LOGIN_FAIL, payload: "login error" });
    }
  };
  //logout
  const logout = () => dispatch({type: LOGOUT});
  //clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS});
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
