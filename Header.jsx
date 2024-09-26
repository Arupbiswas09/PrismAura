//import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Prism Aura</Title>
      <Subtitle>Graphic Design Portfolio</Subtitle>
    </HeaderContainer>
  );
}

export default Header;