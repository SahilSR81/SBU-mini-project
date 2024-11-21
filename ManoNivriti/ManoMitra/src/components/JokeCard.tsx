import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';

const JokeCard = ({ joke }) => {
  if (!joke) return null;

  return (
    <Container>
      <Card>
        <Card.Content>
          <Title>Joke of the Day</Title>
          <Paragraph>{joke.setup}</Paragraph>
          <Paragraph>{joke.punchline}</Paragraph>
        </Card.Content>
      </Card>
    </Container>
  );
};

const Container = styled(View)`
  margin: 16px;
`;

export default JokeCard;

