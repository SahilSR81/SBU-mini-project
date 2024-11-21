import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/api';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      {error ? <HelperText type="error">{error}</HelperText> : null}
      <Button mode="text" onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Button>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export default LoginScreen;

