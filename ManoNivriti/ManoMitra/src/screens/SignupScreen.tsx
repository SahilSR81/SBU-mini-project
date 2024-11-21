import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../services/api';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [occupation, setOccupation] = useState('');
  const [interests, setInterests] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      await signUp({
        email,
        password,
        name,
        gender,
        date_of_birth: dateOfBirth,
        occupation,
        interests,
        preferred_language: preferredLanguage,
      });
      navigation.navigate('Login');
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <Container>
      <ScrollView>
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
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
        />
        <TextInput
          label="Gender"
          value={gender}
          onChangeText={setGender}
          mode="outlined"
        />
        <TextInput
          label="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          mode="outlined"
        />
        <TextInput
          label="Occupation"
          value={occupation}
          onChangeText={setOccupation}
          mode="outlined"
        />
        <TextInput
          label="Interests"
          value={interests}
          onChangeText={setInterests}
          mode="outlined"
        />
        <TextInput
          label="Preferred Language"
          value={preferredLanguage}
          onChangeText={setPreferredLanguage}
          mode="outlined"
        />
        <Button mode="contained" onPress={handleSignup}>
          Sign Up
        </Button>
        {error ? <HelperText type="error">{error}</HelperText> : null}
      </ScrollView>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.background};
`;

export default SignupScreen;

