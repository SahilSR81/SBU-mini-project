import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Avatar, Button, List, Switch } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const ProfileScreen = ({ route }) => {
  const { toggleTheme } = route.params;
  const theme = useTheme();

  return (
    <Container>
      <ScrollView>
        <Animated.View entering={FadeIn.delay(100)}>
          <AvatarContainer>
            <Avatar.Image size={120} source={{ uri: 'https://example.com/avatar.jpg' }} />
            <Username>John Doe</Username>
          </AvatarContainer>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(200)}>
          <List.Section>
            <List.Item
              title="Email"
              description="john.doe@example.com"
              left={(props) => <List.Icon {...props} icon="email" />}
            />
            <List.Item
              title="Language"
              description="English"
              left={(props) => <List.Icon {...props} icon="translate" />}
            />
            <List.Item
              title="Notifications"
              description="On"
              left={(props) => <List.Icon {...props} icon="bell" />}
            />
            <List.Item
              title="Dark Mode"
              right={() => <Switch value={theme.dark} onValueChange={toggleTheme} />}
              left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            />
          </List.Section>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(300)}>
          <Button mode="outlined" onPress={() => {}}>
            Edit Profile
          </Button>
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

const AvatarContainer = styled(View)`
  align-items: center;
  margin-bottom: 24px;
`;

const Username = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.text};
`;

export default ProfileScreen;

