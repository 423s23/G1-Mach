/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    NavigationContainer,
    useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//import Svg, {Polygon} from 'react-native-svg';

import Template from './Template.tsx';
import Home from './HomeScreen.tsx';
import About from './AboutScreen.tsx';
import AdminApproval from './AdminApprovalScreen.tsx';
import Leaderboard from './LeaderboardScreen.tsx';
import Login from './LoginScreen.tsx';
import Rewards from './RewardsScreen.tsx';
import Settings from './SettingsScreen.tsx';
import UserInfo from './UserInfoScreen.tsx';
import SubmitTask from './SubmitTaskScreen.tsx';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name = "Template" component={Template} />
                <Stack.Screen name = "Home" component={Home} />
                <Stack.Screen name = "About" component={About} />
                <Stack.Screen name = "AdminApproval" component={AdminApproval} />
                <Stack.Screen name = "Leaderboard" component={Leaderboard} />
                <Stack.Screen name = "Login" component={Login} />
                <Stack.Screen name = "Rewards" component={Rewards} />
                <Stack.Screen name = "Settings" component={Settings} />
                <Stack.Screen name = "UserInfo" component={UserInfo} />
                <Stack.Screen name = "SubmitTask" component={SubmitTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
