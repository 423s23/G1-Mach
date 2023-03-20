import {Button, Pressable, ScrollView, Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import userInfoScreenStyles from "../Styles/userInfoScreenStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function UserInfoScreen({ navigation }) {
    const starSize = 30;
    let firstName = "Dylan";
    let lastName = "lastName";
    let Level = 13;
    let CurrentPoints = 2300;
    let ProgressPoints = 3000;
    let Rank = 1;
    let taskTotal = 10;
    let registerYear = 2023;
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
                <Text style={userInfoScreenStyles.nameText}>Your progress, {[firstName]}</Text>
                <Text style={userInfoScreenStyles.userText}>Mach athlete since {[registerYear]}</Text>
                <View style={userInfoScreenStyles.levelBox}>
                    <Text style={styles.headerText}>{Titles[Rank]}</Text>
                    <View style={userInfoScreenStyles.starBox}>
                        <Ionicons
                            name={Rank>=1 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={userInfoScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=2 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={userInfoScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=3 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={userInfoScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=4 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={userInfoScreenStyles.star}
                        />
                        <Ionicons
                            name={Rank>=5 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={userInfoScreenStyles.star}
                        />
                    </View>
                </View>
                <View style={userInfoScreenStyles.levelingBox}>
                                    <Text style={userInfoScreenStyles.levelText}>Total Progress</Text>
                                    <Text style={userInfoScreenStyles.pointText}>{[CurrentPoints]}/50,000</Text>
                                </View>
                <View style={userInfoScreenStyles.progressBox}>
                    <View style={userInfoScreenStyles.progressBarBackground}></View>
                    <View style={userInfoScreenStyles.progressBar}></View>
                 </View>
                <View style={userInfoScreenStyles.levelingBox}>
                    <Text style={userInfoScreenStyles.levelText}>Level {[Level]} Progress</Text>
                    <Text style={userInfoScreenStyles.pointText}>{[CurrentPoints]}/{[ProgressPoints]}</Text>
                </View>
                <View style={userInfoScreenStyles.progressBox}>
                    <View style={userInfoScreenStyles.progressBarBackground}></View>
                    <View style={userInfoScreenStyles.progressBar}></View>
                </View>
                <Text style={userInfoScreenStyles.statsText}>Tasks Completed:   {[taskTotal]}</Text>
                <Text style={userInfoScreenStyles.statsText}>Rewards Received:  {[taskTotal]}</Text>
            </View>
        </ScrollView>
    );
}

export default UserInfoScreen;