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
import HelpScreen from './Screens/helpScreen';
import LogOutScreen from './Screens/logOutScreen';
import SubmitTaskHelpScreen from './Screens/submitTaskHelpScreen';
import styles from "./Styles/styles"
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const firebaseConfig = {
    apiKey: "AIzaSyBbEsCWfDuNABFe9E44lBS1OimB-pkBQeU",
    authDomain: "machrewardsapp.firebaseapp.com",
    databaseURL: "https://machrewardsapp-default-rtdb.firebaseio.com",
    projectId: "machrewardsapp",
    storageBucket: "machrewardsapp.appspot.com",
    messagingSenderId: "311919315732",
    appId: "1:311919315732:web:2004d4f538ef63f33b9001",
    measurementId: "G-WVTXPNPTNR"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let userCred = null;
let userData = null;
signInWithEmailAndPassword(auth, "joey.knappenberger@gmail.com", "Joey2001*")
    .then(async (userCredential) => {
        // Signed in
        userCred = userCredential.user;
        const docRef = doc(db, "users", userCred.uid);
        console.log(docRef);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        userData = docSnap.data();
        console.log(userData);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

function HomeTabs(){
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            console.log(userData);
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
              <Stack.Screen name="Help" component={HelpScreen} />
              <Stack.Screen name="SubmitTaskHelp" component={SubmitTaskHelpScreen} />

          </Stack.Navigator>
      </NavigationContainer>
  );
}