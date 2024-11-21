import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ManoMitra</Logo>
      <Greeting>Hello, User!</Greeting>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(View)`
  padding: 16px;
  background-color: ${props => props.theme.colors.primary};
`;

const Logo = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

const Greeting = styled(Text)`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  margin-top: 4px;
`;

export default Header;

