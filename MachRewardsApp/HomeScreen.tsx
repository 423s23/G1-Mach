/**
 * Main homepage for the app
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
import About from './AboutScreen.tsx';
import AdminApproval from './AdminApprovalScreen.tsx';
import Leaderboard from './LeaderboardScreen.tsx';
import Login from './LoginScreen.tsx';
import Rewards from './RewardsScreen.tsx';
import Settings from './SettingsScreen.tsx';
import UserInfo from './UserInfoScreen.tsx';
import SubmitTask from './SubmitTaskScreen.tsx';

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

export default function HomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>

                    <View style={styles.mainContainer}>
                        <View style={styles.headingTitleContainer}>
                            <Text style={styles.headingTitle}>Hello USERNAME,</Text>
                            <Text style={styles.headingRank}>Mach Badass</Text>
                            <View style={styles.twelvePointBurstContainer}>
                                <TwelvePointBurst />
                                <TwelvePointBurst />
                                <TwelvePointBurst />
                                <TwelvePointBurst />
                                <TwelvePointBurst />
                            </View>
                            <View style={styles.headingLevelPointContainer}>
                                <Text style={styles.headingLevel}>Level ###</Text>
                                <Text style={styles.headingPoints}>#####/##### points</Text>
                            </View>
                            <View style={styles.rectangleContainer}>
                                <Rectangle />
                            </View>
                        </View>
                        <View style={styles.sectionContainer}>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight>
                                    <Button
                                        title="Submit Task Completion"
                                        color='#2b2b2b'
                                        onPress={() => navigation.navigate('SubmitTask')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight>
                                    <Button
                                        title="Personal Progress"
                                        color='#2b2b2b'
                                        onPress={() => navigation.navigate('UserInfo')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight>
                                    <Button
                                        title="Team Leaderboard"
                                        color='#2b2b2b'
                                        onPress={() => navigation.navigate('Leaderboard')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.taskbarContainer}>
                            <View style={styles.taskbarButton}>
                                <TouchableHighlight>
                                    <Button
                                        title="Home"
                                        color='#6ccff6'
                                        onPress={() => navigation.navigate('Home')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.taskbarButton}>
                                <TouchableHighlight>
                                    <Button
                                        title="Reward"
                                        color='#6ccff6'
                                        onPress={() => navigation.navigate('Rewards')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.taskbarButton}>
                                <TouchableHighlight>
                                    <Button
                                        title="Message"
                                        color='#6ccff6'
                                        onPress={() => navigation.navigate('Template')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.taskbarButton}>
                                <TouchableHighlight>
                                    <Button
                                        title="Acc."
                                        color='#6ccff6'
                                        onPress={() => navigation.navigate('Template')}
                                    Button/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 790,
    paddingTop: 0,
    backgroundColor: '#000000',
  },

  // HEADING ------------------------------
  headingTitleContainer: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '15%',
    backgroundColor: '#000000',
  },
  headingTitle: {
    fontSize: 24,
    marginLeft: '10%',
    color: '#6ccff6',
    fontWeight: 400,
  },
  headingRank: {
    padding: '2%',
    fontSize: 32,
    textAlign: 'center',
    color: '#6ccff6',
    fontWeight: 700,
  },
  headingLevelPointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingLevel: {
    fontSize: 18,
    marginLeft: '10%',
    textAlign: 'left',
    color: '#6ccff6',
    fontWeight: 300,

  },
  headingPoints: {
    fontSize: 18,
    marginRight: '10%',
    textAlign: 'right',
    color: '#6ccff6',
    fontWeight: 300,
  },

  // MAIN BUTTONS ------------------------
  sectionContainer: {
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
    paddingVertical: '7%',
    marginHorizontal: '10%',
    backgroundColor: '#000000',
    width: '80%',
  },

  // TASKBAR ---------------------------
  taskbarContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
  },
  taskbarButton: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    fontSize: 15,
    width: '25%',
  },

  // SHAPES ---------------------------
  twelvePointBurstContainer: {
    paddingVertical: '4%',
    paddingHorizontal: '12%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  twelvePointBurst: {},
  twelvePointBurstMain: {
    width: 40,
    height: 40,
    backgroundColor: "yellow",
    top: 0,
    right: 0,
  },
  twelvePointBurst30: {
    width: 40,
    height: 40,
    position: "absolute",
    backgroundColor: "yellow",
    top: 0,
    left: 0,
    transform: [{ rotate: "30deg" }],
  },
  twelvePointBurst60: {
    width: 40,
    height: 40,
    position: "absolute",
    backgroundColor: "yellow",
    top: 0,
    left: 0,
    transform: [{ rotate: "60deg" }],
  },
  rectangleContainer: {
    marginTop: '2%',
    paddingHorizontal: '10%',
  },
  rectangleBackground: {
    width: '100%',
    height: 18,
    backgroundColor: "#ffffff",
  },
  rectangle: {
    width: '35%',
    height: 18,
    backgroundColor: "#6ccff6",
  },
});

const TwelvePointBurst = () => {
  return (
    <View style={styles.twelvePointBurst}>
      <View style={styles.twelvePointBurstMain} />
      <View style={styles.twelvePointBurst30} />
      <View style={styles.twelvePointBurst60} />
    </View>
  );
}

const Rectangle = () => {
    return (
        <View style={styles.rectangleBackground}>
            <View style={styles.rectangle} />
        </View>
    );
}