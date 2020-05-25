import React, {useContext} from "react";
import styled from "styled-components";

import ModalContext from "../../context/modal/modalContext";
import ArticleContext from "../../context/article/articleContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const Card = styled.div`
  width: 80%;
  max-width: 600px;
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0 10px 10px -3px rgba(0, 0, 0, 0.1),
    0 4px 4px -2px rgba(0, 0, 0, 0.05);
`;

const ModalContainer = ({ children }) => {
  const modalContext = useContext(ModalContext);
  const {hideModal} = modalContext;

  const articleContext = useContext(ArticleContext);
  const {clearCurrentArticle} = articleContext;

  const clearSettings = () => {
    clearCurrentArticle();
    hideModal();
  }

  return (
    <Wrapper onClick={clearSettings}>
      <Card>{children}</Card>
    </Wrapper>
  );
};

export default ModalContainer;
