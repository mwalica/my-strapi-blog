import React, { useContext, useEffect } from "react";
import Section from "../../styles/Section";
import AuthContext from "../../context/auth/authContext";

import Articles from "../articles/Articles";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Section>
      <h3>Home</h3>
      <Articles />
    </Section>
  );
};

export default Home;
