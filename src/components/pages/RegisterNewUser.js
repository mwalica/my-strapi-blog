import React from "react";
import styled from "styled-components";
import Section from "../../styles/Section";

import Register from '../auth/Register';

const RegisterNewUser = () => {
  return (
    <Section>
      <h3>Register new user</h3>
     <Register />
    </Section>
  );
};

export default RegisterNewUser;