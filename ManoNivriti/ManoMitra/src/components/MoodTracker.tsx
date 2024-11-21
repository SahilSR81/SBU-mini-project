import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const moods = ['😢', '😕', '😐', '🙂', '😄'];

const MoodTracker = () => {
  return (
    <Container>
      <Title>How are you feeling today?</Title>
      <MoodContainer>
        {moods.map((mood, index) => (
          <MoodButton key={index}>
            <MoodEmoji>{mood}</MoodEmoji>
          </MoodButton>
        ))}
      </MoodContainer>
    </Container>
  );
};

const Container = styled(View)`
  background-color: ${props => props.theme.colors.card};
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
`;

const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: 16px;
`;

const MoodContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const MoodButton = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const MoodEmoji = styled(Text)`
  font-size: 24px;
`;

export default MoodTracker;

