import {Button, Pressable, ScrollView, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import homeScreenStyles from "../Styles/homeScreenStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function HomeScreen({ navigation }) {
    const starSize = 30;
    let Level = 1;
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
                <View style={homeScreenStyles.levelBox}>
                    <Text style={styles.headerText}>{Titles[Level]}</Text>
                    <View style={homeScreenStyles.starBox}>
                        <Ionicons
                            name={Level>=1 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Level>=2 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Level>=3 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Level>=4 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                        <Ionicons
                            name={Level>=5 ? 'ios-star' : 'ios-star-outline'}
                            size={starSize}
                            style={homeScreenStyles.star}
                        />
                    </View>

                </View>
                <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;