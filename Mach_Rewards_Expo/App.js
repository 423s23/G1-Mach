import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/homeScreen';
import SettingsScreen from "./Screens/settingsScreen";
import TrackingScreen from "./Screens/trackingScreen";
import LoginScreen from "./Screens/loginScreen";
import styles from "./Styles/styles"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeTabs(){
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-home' : 'ios-home-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Tracking') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-bar-chart' : 'ios-bar-chart-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Settings') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-settings' : 'ios-settings-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: "#6ccff6",
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Tracking" component={TrackingScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
    );
}


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown: false
          }}>
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
              <Stack.Screen name="Profile" component={SettingsScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}