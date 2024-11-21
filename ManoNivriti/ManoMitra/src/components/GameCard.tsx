import React from 'react';
import { View, Linking } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const GameCard = ({ game }) => {
  if (!game) return null;

  const handlePlayGame = () => {
    Linking.openURL(game.link);
  };

  return (
    <Container>
      <Card>
        <Card.Content>
          <Title>Stress Relief Game: {game.name}</Title>
          <Paragraph>{game.description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handlePlayGame}>Play Game</Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};

const Container = styled(View)`
  margin: 16px;
`;

export default GameCard;

