/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

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
            <Text style={styles.headingTitle}>Hello USERNAME [RANK]</Text>
            <View style={styles.twelvePointBurstContainer}>
                <TwelvePointBurst />
                <TwelvePointBurst />
                <TwelvePointBurst />
                <TwelvePointBurst />
                <TwelvePointBurst />
            </View>
            <View style={styles.rectangleContainer}>
                <Rectangle />
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.buttonText}>
                <TouchableHighlight>
                    <Button
                        title="Button1"
                        color='#2b2b2b'
                    Button/>
                </TouchableHighlight>
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.buttonText}>
                <TouchableHighlight>
                    <Button
                        title="Button1"
                        color='#2b2b2b'
                    Button/>
                </TouchableHighlight>
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.buttonText}>
                <TouchableHighlight>
                    <Button
                        title="Button1"
                        color='#2b2b2b'
                    Button/>
                </TouchableHighlight>
            </Text>
          </View>

          <View style={styles.taskbarContainer}>
            <TouchableHighlight>
                <Text style={styles.taskbarText}>
                    <Button
                        title="Button1"
                        color='#2b2b2b'
                    Button/>
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.taskbarText}>
                   <Button
                        title="Button2"
                        color='#2b2b2b'
                   Button/>
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.taskbarText}>
                    <Button
                        title="Button3"
                        color='#2b2b2b'
                    Button/>
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.taskbarText}>
                    <Button
                        title="Button4"
                        color='#2b2b2b'
                    Button/>
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.taskbarText}>
                    <Button
                        title="Button5"
                        color='#2b2b2b'
                    Button/>
                </Text>
            </TouchableHighlight>
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
    justifyContent: 'flex-start',
    paddingTop: 0,
    height: 850,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  headingTitleContainer: {
    paddingTop: 8,
    paddingBottom: 20,
    paddingLeft: 6,
    backgroundColor: '#6ccff6',
  },
  headingTitle: {
    fontSize: 24,
    paddingBottom: 12,
    color: '#111111',
    fontWeight: 500,
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 20,
    //alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
    //flexDirection: 'column',
    //width: "100%",
    //height: 0,
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
    width: "20%",
    height: 70,
    bottom: 0,
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
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  twelvePointBurst: {},
  twelvePointBurstMain: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    top: 0,
    right: 0,
  },
  twelvePointBurst30: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "yellow",
    top: 0,
    left: 0,
    transform: [{ rotate: "30deg" }],
  },
  twelvePointBurst60: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "yellow",
    top: 0,
    left: 0,
    transform: [{ rotate: "60deg" }],
  },
  rectangleContainer: {
    marginTop: 25,
    paddingHorizontal: 25,
  },
  rectangle: {
    width: "100%",
    height: 40,
    backgroundColor: "lime",
    borderColor: "black",
    borderWidth: 4,
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
    return <View style={styles.rectangle} />;
}

export default App;
