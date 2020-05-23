import React from "react";
import styled from "styled-components";
import Section from '../../styles/Section';

import Articles from '../articles/Articles';


const Home = () => {
  return (
    <Section>
      <h3>Home</h3>
      <Articles />
    </Section>
  );
};

export default Home;
