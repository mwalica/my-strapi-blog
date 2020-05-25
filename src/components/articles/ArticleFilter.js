import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import ArticleContext from "../../context/article/articleContext";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  form {
    width: 100%;
    display: flex;
    justify-content: center;
  align-items: center;

    input {
      width: 60%;
      padding: 0.5em 1em;

      background-color: transparent;
      font-family: ${({ theme }) => theme.mainFont};
      font-size: 1rem;
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.formBorder};

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #6878a4;
      }
    }
  }
`;

const ArticleFilter = () => {
  const articleContext = useContext(ArticleContext);
  const { filterArticles, clearFilter, filtered } = articleContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const changeHandler = (e) => {
    if (text.current.value != "") {
      articleContext.filterArticles(e.target.value);
    } else {
      articleContext.clearFilter();
    }
  };

  return (
    <Wrapper>
      <form autoComplete="off">
        <input
          ref={text}
          type="text"
          placeholder="Filter Articles..."
          onChange={changeHandler}
        />
      </form>
    </Wrapper>
  );
};

export default ArticleFilter;
