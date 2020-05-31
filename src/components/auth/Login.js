import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import ModalContext from "../../context/modal/modalContext";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

import ContainerAuth from "../layout/ContainerAuth";
import Alerts from '../layout/Alerts'

const Wrapper = styled.form`
  padding: 1em;
  h3 {
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
  }
`;

const FormField = styled.div`
  width: 100%;
  padding: 2em 2em 0;
  &:last-child {
    padding-bottom: 2em;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.5em 1em;

    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.mainFont};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.formBorder};
    border-radius: 0.25em;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #6878a4;
    }
  }

  input[type="submit"] {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40%;
    padding: 0.4em 1em;
    border: none;
    background-color: ${({ theme }) => theme.orange};
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    border-radius: 0.2em;
    transition: color 0.4s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
      outline: none;
    }
  }
`;

const Login = () => {
  const modalContext = useContext(ModalContext);

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "login error") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({ email, password });
    }
  };

  return (
    <>
      <Alerts />
      <ContainerAuth>
        <Wrapper
          autoComplete="off"
          onSubmit={submitHandler}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Login</h3>

          <FormField>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={changeHandler}
            />
          </FormField>

          <FormField>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
          </FormField>

          <FormField>
            <input type="submit" value="Login" />
          </FormField>
        </Wrapper>
      </ContainerAuth>
    </>
  );
};

export default Login;
