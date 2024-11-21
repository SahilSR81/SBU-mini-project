import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const QuoteCard = () => {
  return (
    <Container>
      <Quote>"Believe you can and you're halfway there."</Quote>
      <Author>- Theodore Roosevelt</Author>
    </Container>
  );
};

const Container = styled(View)`
  background-color: ${props => props.theme.colors.card};
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
`;

const Quote = styled(Text)`
  font-size: 16px;
  font-style: italic;
  color: ${props => props.theme.colors.text};
  margin-bottom: 8px;
`;

const Author = styled(Text)`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: right;
`;

export default QuoteCard;

