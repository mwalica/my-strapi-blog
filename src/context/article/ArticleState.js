import React, { useReducer } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ArticleContext from "./articleContext";
import articleReducer from "./articleReducer";
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT_ARTICLE,
  CLEAR_CURRENT_ARTICLE,
  UPDATE_ARTICLE,
  FILTER_ARTICLES,
  CLEAR_ERRORS,
  CLEAR_FILTER,
  ARTICLE_ERROR,
} from "../types";

const ArticleState = (props) => {
  const initialState = {
    articles: [],
    current: null,
    filtered: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  //get articles
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:1337/articles");
      console.log(res.data);
      dispatch({ type: GET_ARTICLES, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  //add article
  const addArticle = async (article, token) => {
    try {
      const res = await axios.post("http://localhost:1337/articles", article, {
        headers: { Authorization: `Bearer ${token}` }});
      article.id = uuidv4();
      dispatch({ type: ADD_ARTICLE, payload: article });
    } catch (err) {
      dispatch({ type: ARTICLE_ERROR, payload: "add article error" });
    }
  };

  //delete article
  const deleteArticle = async (id, token) => {

    try {
      await axios.delete(`http://localhost:1337/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: DELETE_ARTICLE, payload: id });
    } catch (err) {
      dispatch({ type: ARTICLE_ERROR, payload: "delete error" });
    }

    
  };

   //update contact
   const updateArticle = async (article, token) => {
    try {
      const res = await axios.put(`http://localhost:1337/articles/${article.id}`, article, {
        headers: { Authorization: `Bearer ${token}` }});
      article.id = uuidv4();
      dispatch({ type: UPDATE_ARTICLE, payload: article });
    } catch (err) {
      dispatch({ type: ARTICLE_ERROR, payload: "update article error" });
    }
  };

  //set current article
  const setCurrentArticle = (article) => {
    dispatch({ type: SET_CURRENT_ARTICLE, payload: article });
  };
  //clear current article
  const clearCurrentArticle = () => {
    dispatch({ type: CLEAR_CURRENT_ARTICLE });
  };
 

  //filter contacts
  const filterArticles = (text) => {
    dispatch({ type: FILTER_ARTICLES, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //clear errors article
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS});

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getArticles,
        addArticle,
        updateArticle,
        deleteArticle,
        setCurrentArticle,
        clearCurrentArticle,
        filterArticles,
        clearFilter,
        clearErrors
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
