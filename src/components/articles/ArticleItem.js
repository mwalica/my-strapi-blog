import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArticleContext from "../../context/article/articleContext";
import ModalContext from "../../context/modal/modalContext";

const Wrapper = styled.div`
  width: 100%;
`;

const Card = styled.div`
  position: relative;
  background-color: #fff;
  margin-bottom: 1em;
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: 0 10px 10px -3px rgba(0, 0, 0, 0.1),
    0 4px 4px -2px rgba(0, 0, 0, 0.05);
  img {
    width: 100%;
  }
`;

const CardContent = styled.div`
  padding: 0.5em 1em;
  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.grayDark};
  }
`;

const CardFooter = styled.div`
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-container {
    a,
    div.icon {
      cursor: pointer;
      display: inline-block;
      padding: 0 0.2em;
      background-color: transparent;
      color: ${({ theme }) => theme.text};
      transition: color 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.primary};
      }
      &:first-child {
        margin-right: 0.5em;
      }
    }
  }
  a {
    padding: 0.4em 1em;
    background-color: ${({ theme }) => theme.primary};
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0.2em;
    transition: color 0.4s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const ArticleItem = ({ iconEdit, iconDelete, article }) => {

  const modalContext = useContext(ModalContext);
  const { showModal } = modalContext;

  const articleContext = useContext(ArticleContext);
  const { deleteArticle, setCurrentArticle, clearCurrentArticle } = articleContext;

  const { id, title, content, image, created_at } = article;

  const deleteHandler = () => {
    deleteArticle(id);
    clearCurrentArticle();
  };

  const editHandler = () => {
    setCurrentArticle(article);
    showModal();
  }

  const shortContent = content.slice(0, 200);
  return (
    <Wrapper>
      <Card>
        <img
          src={`http://localhost:1337${image.formats.medium.url}`}
          alt={title}
          width="400px"
        />
        <CardContent>
          <h4>{title}</h4>
          <p>{shortContent}...</p>
        </CardContent>
        <CardFooter>
          <div className="icon-container">
            <div className="icon" onClick={editHandler}>
              <i className={iconEdit}></i>
            </div>
            <div className="icon">
              <i className={iconDelete} onClick={deleteHandler}></i>
            </div>
          </div>
          <Link to={`posts/${id}`}>więcej</Link>
        </CardFooter>
      </Card>
    </Wrapper>
  );
};

ArticleItem.propTypes = {
  iconEdit: PropTypes.string,
  iconDelete: PropTypes.string,
};

ArticleItem.defaultProps = {
  iconEdit: "far fa-edit",
  iconDelete: "far fa-trash-alt",
};

export default ArticleItem;
