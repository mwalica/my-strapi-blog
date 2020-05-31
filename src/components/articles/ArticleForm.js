import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ArticleContext from "../../context/article/articleContext";
import ModalContext from "../../context/modal/modalContext";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";


import ModalContainer from "../layout/ModalContainer";
import Alerts from '../layout/Alerts';
import ImageInput from "../../styles/ImageInput";

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
  textarea {
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
  textarea {
    resize: none;
  }

  input[type="submit"],
  button {
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
  button {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ArticleForm = () => {
  const modalContext = useContext(ModalContext);
  const { hideModal } = modalContext;

  const articleContext = useContext(ArticleContext);
  const {
    addArticle,
    updateArticle,
    current,
    clearCurrentArticle,
  } = articleContext;

  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;

  const authContext = useContext(AuthContext);
  const { token } = authContext;

  useEffect(() => {
    if (current !== null) {
      setArticle(current);
    } else {
      setArticle({
        title: "",
        content: "",
        image: "",
      });
    }
  }, [articleContext, current]);

  const [article, setArticle] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content, image } = article;

  const changeHandler = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("files", e.target.files[0]);

    const upload_res = await axios({
      method: "POST",
      url: "http://localhost:1337/upload",
      data,
    });
    console.log(upload_res.data[0]);
    setArticle({ ...article, image: upload_res.data[0] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title === "" || content === "" || image === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      if (current === null) {
        addArticle(article, token);
      } else {
        updateArticle(article, token);
      }

      clearAll();
      hideModal();
    }
  };

  const clearAll = () => {
    clearCurrentArticle();
  };

  return (
    <ModalContainer>
      <Wrapper
        autoComplete="off"
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{current ? "Edit article" : "Add new article"}</h3>

        <FormField>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={changeHandler}
          />
        </FormField>
        <FormField>
          <textarea
            cols="30"
            rows="10"
            placeholder="content"
            name="content"
            value={content}
            onChange={changeHandler}
          />
        </FormField>
        {!current && (
          <FormField>
            <ImageInput
              name="file"
              handleImage={handleImageUpload}
              value={article.image}
            />
          </FormField>
        )}
        {current && (
          <FormField>
            <button onClick={clearAll}>Clear</button>
          </FormField>
        )}
        <FormField>
          <input
            type="submit"
            value={current ? "Update article" : "Add new article"}
          />
        </FormField>
      </Wrapper>
      <Alerts />
    </ModalContainer>
  );
};

export default ArticleForm;
