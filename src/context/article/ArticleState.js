import React, { useReducer } from "react";
import uuid from "uuid";
import ArticleContext from "./articleContext";
import articleReducer from "./articleReducer";
import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT_ARTICLE,
  CLEAR_CURRENT_ARTICLE,
  UPDATE_ARTICLE,
  FILTER_ARTICLES,
  CLEAR_FILTER,
} from "../types";

import { posts } from "./data";

const ArticleState = (props) => {
  const initialState = {
    posts,
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  //add contact

  //delete contact

  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
      <ArticleContext.Provider value={{
          articles: state.posts
      }}>
          {props.children}
      </ArticleContext.Provider>
  )
};


export default ArticleState;