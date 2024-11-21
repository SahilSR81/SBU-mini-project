import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const questions = [
  "How's your physical health today?",
  "Did you exercise today?",
  "How were your eating habits today?",
  "How was your sleep quality last night?",
  "Did any significant events impact your mood today?",
];

const MoodInputScreen = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const navigation = useNavigation();

  const handleSubmit = () => {
    // TODO: Send answers to API
    navigation.goBack();
  };

  return (
    <Container>
      <ScrollView>
        {questions.map((question, index) => (
          <Animated.View key={index} entering={FadeInUp.delay(index * 100)}>
            <QuestionContainer>
              <QuestionText>{question}</QuestionText>
              <TextInput
                value={answers[index]}
                onChangeText={(text) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = text;
                  setAnswers(newAnswers);
                }}
                mode="outlined"
              />
            </QuestionContainer>
          </Animated.View>
        ))}
      </ScrollView>
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

const QuestionContainer = styled(View)`
  margin-bottom: 16px;
`;

const QuestionText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.text};
`;

export default MoodInputScreen;

