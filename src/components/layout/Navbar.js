import React, {useContext} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

import ModalContext from '../../context/modal/modalContext';

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
  h1 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 2.2rem;
    font-weight: 400;
  }
`;

const Nav = styled.nav`
ul {
  display: flex;
  li {
    padding: 0 1em;
    color: rgba(255, 255, 255, 0.9);
    a, .link {
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
  const {showModal} = modalContext;
  return (
    <Wrapper>
      <Logo>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <span className="link" onClick={showModal}>Add Article</span>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
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
