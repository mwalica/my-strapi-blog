import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import ModalContext from "../../context/modal/modalContext";
import AuthContext from "../../context/auth/authContext";

const Wrapper = styled.div`
  width: 100%;
  max-height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.primary};
`;

const Logo = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 2.2rem;
    font-weight: 400;
  }
`;

const LogUser = styled.div`
  padding: 0 1em;
  color: rgba(255, 255, 255, 0.9);
`;

const Nav = styled.nav`
  ul {
    display: flex;
    li {
      padding: 0 1em;
      color: rgba(255, 255, 255, 0.9);
      a {
        cursor: pointer;
        color: inherit;
        transition: color 0.2s ease-in;
        &:hover {
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
`;

const Navbar = ({ title, icon }) => {
  const modalContext = useContext(ModalContext);
  const authContext = useContext(AuthContext);
  const { showModal } = modalContext;
  const { isAuthenticated, logout, user } = authContext;

  const logoutHandler = () => {
    logout();
  };

  const authLinks = (
    <>
      <li>
        <a href="#!" className="link" onClick={showModal}>
          Add Article
        </a>
      </li>
      <li>
        <a href="#!" onClick={logoutHandler}>
          <i className="fas fa-sign-out-alt" />
          <span> Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <Wrapper>
      <Logo>
        <h1>
          <i className={icon} /> {title}
        </h1>
        {user && <LogUser>Zalogowano: {user}</LogUser>}
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </Nav>
    </Wrapper>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "My Blog",
  icon: "fas fa-blog",
};

export default Navbar;
