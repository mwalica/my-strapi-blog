import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import ArticleContext from "../../context/article/articleContext";
import AlertContext from "../../context/alert/alertContext";

import Loader from "../layout/Loader";
import ArticleItem from "./ArticleItem";
import Alerts from '../layout/Alerts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5em;
`;

const Articles = () => {
  const articleContext = useContext(ArticleContext);
  const { error, articles, filtered, loading, getArticles, clearErrors } = articleContext;

  
  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;

  useEffect(() => {
    getArticles();
    if(error === "delete error") {
      setAlert(error, "danger");
      clearErrors();
    }
    //es-lint-disable-next-line
  }, [error]);

  if (articles !== null && articles.length === 0 & !loading) {
    return <h4>Please add article</h4>;
  }

  return (
    <>
    <Wrapper>
      {articles !== null && !loading ? (
        <>
          {filtered !== null
            ? filtered.map((article) => (
                <ArticleItem key={article.id} article={article} />
              ))
            : articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
              ))}
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
    <Alerts />
    </>
  );
};

export default Articles;
