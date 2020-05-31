import styled from "styled-components";

const Section = styled.section`
  margin: 1em 0;

  h3 {
    margin-bottom: 1.5em;
    color: ${({ theme }) => theme.grayDark};
    font-size: 1.8rem;
    font-weight: 400;
  }
`;


export default Section;