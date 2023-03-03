import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/homeScreen';
import SettingsScreen from "./Screens/settingsScreen";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return (
                      <Ionicons
                          name={
                            focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline'
                          }
                          size={size}
                          color={color}
                      />
                  );
                } else if (route.name === 'Settings') {
                  return (
                      <Ionicons
                          name={focused ? 'ios-list' : 'ios-list'}
                          size={size}
                          color={color}
                      />
                  );
                }
              },
              tabBarInactiveTintColor: 'gray',
              tabBarActiveTintColor: 'tomato',
            })}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}