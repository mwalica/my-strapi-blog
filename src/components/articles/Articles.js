import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ArticleContext from "../../context/article/articleContext";

import Loader from "../layout/Loader";
import ArticleItem from "./ArticleItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5em;
`;

const Articles = () => {
  const articleContext = useContext(ArticleContext);
  console.log(articleContext);
  const { articles, filtered, getArticles, loading } = articleContext;

  useEffect(() => {
    getArticles();
    //es-lint-disable-next-line
  }, []);

  if (articles.length === 0) {
    return <h4>Please add article</h4>;
  }

  return (
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
  );
};

export default Articles;
