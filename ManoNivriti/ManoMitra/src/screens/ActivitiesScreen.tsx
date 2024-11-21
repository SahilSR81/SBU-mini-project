import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';

const activities = [
  { title: 'Meditation', description: 'Guided meditation sessions' },
  { title: 'Yoga', description: 'Yoga poses and routines' },
  { title: 'Breathing Exercises', description: 'Calming breathing techniques' },
  { title: 'Journaling', description: 'Express your thoughts and feelings' },
  { title: 'Music Therapy', description: 'Relaxing music playlists' },
];

const ActivitiesScreen = () => {
  return (
    <Container>
      <ScrollView>
        {activities.map((activity, index) => (
          <Animated.View key={index} entering={FadeInRight.delay(index * 100)}>
            <ActivityCard>
              <Card.Content>
                <Title>{activity.title}</Title>
                <Paragraph>{activity.description}</Paragraph>
              </Card.Content>
            </ActivityCard>
          </Animated.View>
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

const ActivityCard = styled(Card)`
  margin-bottom: 16px;
`;

export default ActivitiesScreen;

