import React, { useContext } from "react";
import styled from 'styled-components';
import ArticleContext from "../../context/article/articleContext";

import ArticleItem from "./ArticleItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  grid-gap: 1.5em;
`;

const Articles = () => {
  const articleContext = useContext(ArticleContext);
  console.log(articleContext);
  const { articles } = articleContext;
  return (
    <Wrapper>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Wrapper>
  );
};

export default Articles;
