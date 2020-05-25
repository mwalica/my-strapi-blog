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
  CLEAR_FILTER,
} from "../types";

const ArticleState = (props) => {
  const initialState = {
    articles: [],
    current: null,
    filtered: null,
    loading: true,
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
  const addArticle = (article) => {
    article.id = uuidv4();
    dispatch({ type: ADD_ARTICLE, payload: article });
  };

  //delete article
  const deleteArticle = (id) => {
    dispatch({ type: DELETE_ARTICLE, payload: id });
  };

  //set current article
  const setCurrentArticle = (article) => {
    dispatch({ type: SET_CURRENT_ARTICLE, payload: article });
  };
  //clear current article
  const clearCurrentArticle = () => {
    dispatch({ type: CLEAR_CURRENT_ARTICLE });
  };
  //update contact
  const updateArticle = (article) => {
    dispatch({ type: UPDATE_ARTICLE, payload: article });
  };

  //filter contacts
  const filterArticles = (text) => {
    dispatch({ type: FILTER_ARTICLES, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        current: state.current,
        filtered: state.filtered,
        getArticles,
        addArticle,
        updateArticle,
        deleteArticle,
        setCurrentArticle,
        clearCurrentArticle,
        filterArticles,
        clearFilter
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
