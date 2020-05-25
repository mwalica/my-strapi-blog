import React from 'react';
import styled from "styled-components";
import Section from '../../styles/Section';
import ArticleFilter from '../articles/ArticleFilter';

import Articles from '../articles/Articles';

const Blog = () => {
    return (
        <Section>
        <h3>Blog</h3>
        <ArticleFilter />
        <Articles />
      </Section>
    )
}

export default Blog
