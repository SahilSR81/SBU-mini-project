import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const MeditationPlayer = ({ meditation }) => {
  if (!meditation) return null;

  return (
    <Container>
      <Card>
        <Card.Content>
          <Title>Meditation: {meditation.title}</Title>
          <Paragraph>Duration: {meditation.duration}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button icon="play">Play</Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};

const Container = styled(View)`
  margin: 16px;
`;

export default MeditationPlayer;

