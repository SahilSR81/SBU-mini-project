import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';

const DashboardScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Animated.View entering={FadeInDown.delay(100)}>
          <DashboardCard>
            <Card.Content>
              <Title>Mood Trends</Title>
              <Paragraph>Your mood has been improving over the last 7 days.</Paragraph>
            </Card.Content>
          </DashboardCard>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)}>
          <DashboardCard>
            <Card.Content>
              <Title>Activity Streak</Title>
              <Paragraph>You've completed activities for 5 days in a row!</Paragraph>
            </Card.Content>
          </DashboardCard>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300)}>
          <DashboardCard>
            <Card.Content>
              <Title>Meditation Progress</Title>
              <Paragraph>Total meditation time: 2 hours 30 minutes</Paragraph>
            </Card.Content>
          </DashboardCard>
        </Animated.View>
      </ScrollView>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

const DashboardCard = styled(Card)`
  margin-bottom: 16px;
`;

export default DashboardScreen;

