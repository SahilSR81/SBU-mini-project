import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const SongPlayer = ({ song }) => {
  if (!song) return null;

  return (
    <Container>
      <Card>
        <Card.Content>
          <Title>Song: {song.title}</Title>
          <Paragraph>Artist: {song.artist}</Paragraph>
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

export default SongPlayer;

