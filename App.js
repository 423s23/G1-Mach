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
import AboutScreen from './Screens/aboutScreen';
import AdminApprovalScreen from './Screens/adminApprovalScreen';
import LeaderboardScreen from './Screens/leaderboardScreen';
import RewardsScreen from './Screens/rewardsScreen';
import SubmitTaskScreen from './Screens/submitTaskScreen';
import UserInfoScreen from './Screens/userInfoScreen';
import ContactInfoScreen from './Screens/contactInfoScreen';
import NotificationsScreen from './Screens/notificationsScreen';
import LanguagesScreen from './Screens/languagesScreen';
import LogOutScreen from './Screens/logOutScreen';
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
                        } else if (route.name === 'UserInfo') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-person' : 'ios-person-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'About') {
                            return (
                                <Ionicons
                                    name={focused ? 'ios-scan' : 'ios-scan-outline'}
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
                <Tab.Screen name="UserInfo" component={UserInfoScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                
            </Tab.Navigator>
    );
}

// FOR DEVELOPING: change the initialRoutName to the screen you are working on
// BUT put it back to "Login" before pushing
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{
              headerShown: false
          }}>
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
              <Stack.Screen name="Profile" component={SettingsScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="UserInfo" component={UserInfoScreen} />
              <Stack.Screen name="About" component={AboutScreen} />
              <Stack.Screen name="SubmitTask" component={SubmitTaskScreen} />
              <Stack.Screen name="Tracking" component={TrackingScreen} />
              <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
              <Stack.Screen name="AdminApproval" component={AdminApprovalScreen} />
              <Stack.Screen name="Rewards" component={RewardsScreen} />
              <Stack.Screen name="ContactInfo" component={ContactInfoScreen} />
              <Stack.Screen name="Notifications" component={NotificationsScreen} />
              <Stack.Screen name="LogOut" component={LogOutScreen} />
              <Stack.Screen name="Languages" component={LanguagesScreen} />

          </Stack.Navigator>
      </NavigationContainer>
  );
}