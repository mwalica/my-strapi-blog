import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40%;
  padding: 0.4em 1em;
  background-color: ${({ theme }) => theme.primary};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  border-radius: 0.2em;
  transition: color 0.4s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  input {
    display: none;
  }
`;

const ImageInput = ({ name, handleImage }) => {
  const fileInputRef = useRef(null);
  return (
    <Wrapper>
      <Button onClick={() => fileInputRef.current.click()}>
        <span>Add photo</span>
        <input
          type="file"
          name={name}
          placeholder="add image"
          ref={fileInputRef}
          onChange={handleImage}
        />
      </Button>
    </Wrapper>
  );
};

export default ImageInput;
