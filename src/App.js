import React from 'react';
import styled from '@emotion/styled/macro';
import './styles/build.css';

const Wrapper = styled.h1`
  background: red;
  color: blue;
`;

export default function App() {
  return (
    <>
      <Wrapper>Hello</Wrapper>
      <h2 className="text-pink-800">Hello Again</h2>
    </>
  );
}
