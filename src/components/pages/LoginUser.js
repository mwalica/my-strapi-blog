import React from "react";
import Section from "../../styles/Section";

import Login from '../auth/Login';

const LoginUser = () => {
  return (
    <Section>
      <h3>Login User</h3>
     <Login />
    </Section>
  );
};

export default LoginUser;