import React, { useEffect, useContext } from "react";
import Section from "../../styles/Section";
import { useParams, useHistory } from "react-router-dom";

import ArticleContext from "../../context/article/articleContext";

import ArticleDetail from "../articles/ArticleDetail";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const articleContext = useContext(ArticleContext);
  const { articles, getArticles } = articleContext;

  useEffect(() => {
    getArticles();
  }, []);


  return (
    <Section>
      <h3>Article</h3>
      <ArticleDetail id={id} history={history} articles={articles}/>
    </Section>
  );
};

export default BlogDetail;
