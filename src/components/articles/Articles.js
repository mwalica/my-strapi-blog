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
  const { articles, getArticles, loading } = articleContext;

  useEffect(() => {
    getArticles();
    //es-lint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {articles !== null && !loading ? (
        <>
          {articles.map((article) => (
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
