import { DefaultTheme, DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#000000',
    textSecondary: '#757575',
    accent: '#03dac6',
    error: '#b00020',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    card: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    accent: '#03dac6',
    error: '#cf6679',
  },
};

export { lightTheme, darkTheme };

