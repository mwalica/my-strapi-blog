import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import ArticleForm from "./components/articles/ArticleForm";

import Navbar from "./components/layout/Navbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import BlogDetail from "./components/pages/BlogDetail";
import RegisterNewUser from "./components/pages/RegisterNewUser";
import LoginUser from "./components/pages/LoginUser";

import ArticleState from "./context/article/ArticleState";
import AlertState from "./context/alert/AlertState";

import ModalContext from "./context/modal/modalContext";

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  margin: 0 auto;
`;

const App = () => {
  const modalContext = useContext(ModalContext);
  const { modal } = modalContext;

  return (
    <ArticleState>
      <AlertState>
        <Router>
          <ThemeProvider theme={theme}>
            {modal && <ArticleForm />}
            <Navbar />
            <Container>
             
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/:id" children={<BlogDetail></BlogDetail>} />
                <Route exact path="/register" component={RegisterNewUser} />
                <Route exact path="/login" component={LoginUser} />
              </Switch>
            </Container>
          </ThemeProvider>
        </Router>
      </AlertState>
    </ArticleState>
  );
};

export default App;
