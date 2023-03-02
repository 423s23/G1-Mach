/**
 * Template for react native screens
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
import Svg, {Polygon} from 'react-native-svg';

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

                        </View>
                        <View style={styles.taskbarContainer}>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#000000',
  },
  headingTitleContainer: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: '#000000',
  },
  headingTitle: {
    fontSize: 24,
    marginLeft: '10%',
    color: '#6ccff6',
    fontWeight: 500,
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
  sectionContainer: {
    flex: 3,
    paddingTop: 35,
    paddingHorizontal: 20,
    //alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
    //flexDirection: 'column',
    //width: "100%",
    height: '50%',
    //Top: 0,
  },
  buttonText: {
    padding: 10,
    backgroundColor: '#111111',
    textAlign: 'center',
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  taskbarContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: 'row',
    height: '20%',
  },
  taskbarText: {
    padding: 15,
    backgroundColor: '#111111',
    textAlign: 'center',
    fontSize: 15,
  },
  progressBar: {

  },
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
    //backgroundColor: '#ffffff',
  },
  rectangleBackground: {
    //position: 'absolute',
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