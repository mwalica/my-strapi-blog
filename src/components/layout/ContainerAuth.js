import React, { useContext } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 80%;
  max-width: 600px;
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0 10px 10px -3px rgba(0, 0, 0, 0.1),
    0 4px 4px -2px rgba(0, 0, 0, 0.05);
`;

const ContainerAuth = ({ children }) => {


  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  );
};

export default ContainerAuth;
