import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT_ARTICLE,
  CLEAR_CURRENT_ARTICLE,
  UPDATE_ARTICLE,
  FILTER_ARTICLES,
  CLEAR_FILTER,
  ARTICLE_ERROR,
  CLEAR_ERRORS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        loading: false,
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.payload.id ? action.payload : article
        ),
        loading: false,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.payload
        ),
        loading: false,
      };
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_ARTICLE:
      return {
        ...state,
        current: null,
      };
    case FILTER_ARTICLES:
      return {
        ...state,
        filtered: state.articles.filter((article) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return article.title.match(regex) || article.content.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
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
