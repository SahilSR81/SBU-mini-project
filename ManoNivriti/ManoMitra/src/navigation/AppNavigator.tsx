import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Activity, User, BarChart2 } from 'lucide-react-native';
import HomeScreen from '../screens/HomeScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = <Home color={color} size={size} />;
        } else if (route.name === 'Activities') {
          icon = <Activity color={color} size={size} />;
        } else if (route.name === 'Profile') {
          icon = <User color={color} size={size} />;
        } else if (route.name === 'Dashboard') {
          icon = <BarChart2 color={color} size={size} />;
        }

        return icon;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Activities" component={ActivitiesScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AppNavigator;

