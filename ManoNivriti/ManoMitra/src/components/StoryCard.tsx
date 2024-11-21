import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const StoryCard = ({ story }) => {
  if (!story) return null;

  return (
    <Container>
      <Card>
        <Card.Content>
          <Title>Short Story: {story.title}</Title>
          <Paragraph>{story.excerpt}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Read More</Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};

const Container = styled(View)`
  margin: 16px;
`;

export default StoryCard;

