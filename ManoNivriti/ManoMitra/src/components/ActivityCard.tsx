import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

const ActivityCard = ({ title, duration }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Duration>{duration}</Duration>
      <StartButton>
        <ButtonText>Start</ButtonText>
      </StartButton>
    </Container>
  );
};

const Container = styled(View)`
  background-color: ${props => props.theme.colors.card};
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const Duration = styled(Text)`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
`;

const StartButton = styled(TouchableOpacity)`
  background-color: ${props => props.theme.colors.primary};
  padding: 8px 16px;
  border-radius: 4px;
`;

const ButtonText = styled(Text)`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

export default ActivityCard;

