import {Button, Pressable, ScrollView, Text, View, StlyeSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import homeScreenStyles from "../Styles/homeScreenStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function HomeScreen({ navigation }) {
    const starSize = 30;
    let Name = "Dylan";
    let Level = 13;
    let CurrentPoints = 2300;
    let ProgressPoints = 3000;
    let Rank = 1;
    let Titles = [
        "Not Yet Verified",
        "Mach Badass",
        "Mach Star",
        "Mach Icon",
        "Mach Hero",
        "Mach Legend"]
    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                <Text style={homeScreenStyles.nameText}>Hello {[Name]},</Text>
                <View style={homeScreenStyles.levelBox}>
                    <Text style={styles.headerText}>{Titles[Rank]}</Text>
                    <View style={homeScreenStyles.starBox}>
                        <Ionicons
                            name={Rank>=1 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=2 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=3 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=4 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=5 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                    </View>
                </View>
                <View style={homeScreenStyles.levelingBox}>
                    <Text style={homeScreenStyles.levelText}>Level {[Level]}</Text>
                    <Text style={homeScreenStyles.pointText}>{[CurrentPoints]}/{[ProgressPoints]}</Text>
                </View>
                <View style={homeScreenStyles.progressBox}>
                    <View style={homeScreenStyles.progressBarBackground}></View>
                    <View style={homeScreenStyles.progressBar}></View>
                </View>
                
                <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;