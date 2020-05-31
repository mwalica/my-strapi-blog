import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ContainerArticle from "../layout/ContainerArticle";
import Loader from "../layout/Loader";

import AuthContext from "../../context/auth/authContext";
import ArticleContext from "../../context/article/articleContext";

const Image = styled.div`
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 1em;
  h4 {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

const Footer = styled.div`
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

const ArticleDetail = ({ id, history, articles, iconEdit, iconDelete }) => {
  const currArticle = articles.find((item) => item.id === id);

  const authContext = useContext(AuthContext);
  const { token, isAuthenticated } = authContext;

  const articleContext = useContext(ArticleContext);
  const {
    deleteArticle,
    setCurrentArticle,
    clearCurrentArticle,
  } = articleContext;

  const editHandler = () => {};

  const deleteHandler = () => {
    deleteArticle(id, token);
    clearCurrentArticle();
  };

  if (!currArticle) {
    return <Loader />;
  }
  return (
    <ContainerArticle>
      <Image>
        <img
          src={`http://localhost:1337${currArticle.image.formats.large.url}`}
          alt={currArticle.title}
        />
      </Image>
      <Content>
        <h4 className="title">{currArticle.title}</h4>
        <small>
          {moment(currArticle.createdAt).format("YYYY-MM-DD")}, author:{" "}
          {currArticle.user.username}{" "}
        </small>
        <p>{currArticle.content}</p>
      </Content>
      <Footer>
        {isAuthenticated &&
          currArticle.user.username ===
            authContext.user && (
              <div className="icon-container">
                <div className="icon" onClick={editHandler}>
                  <i className={iconEdit}></i>
                </div>
                <div className="icon">
                  <i className={iconDelete} onClick={deleteHandler}></i>
                </div>
              </div>
            )}

        <Link to="/blog">return</Link>
      </Footer>
    </ContainerArticle>
  );
};

ArticleDetail.propTypes = {
  iconEdit: PropTypes.string,
  iconDelete: PropTypes.string,
};

ArticleDetail.defaultProps = {
  iconEdit: "far fa-edit",
  iconDelete: "far fa-trash-alt",
};

export default ArticleDetail;
