import {Image, Text, View, StyleSheet, Pressable} from "react-native";
import leaderboardStyles from "../Styles/leaderboardStyle";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import commonStyles from "../Styles/commonStyles";

function LeaderboardScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={commonStyles.backBox}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Text style={commonStyles.back}>{'❮'}</Text>
                </Pressable>
            </View>
            <Text style={leaderboardStyles.header}>LEADERBOARD</Text>
            <View style={leaderboardStyles.podium}>
                <View style={leaderboardStyles.outerPerson}>
                    <Text style={leaderboardStyles.noMargin}>2</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>Bella</Text>
                    <Text>{"\n"}</Text>
                    <Text>2600</Text>
                </View>
                <View style={leaderboardStyles.person}>
                    <Text style={leaderboardStyles.one}>1</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>Adam</Text>
                    <Text>{"\n"}</Text>
                    <Text>2600</Text>
                </View>
                <View style={leaderboardStyles.outerPerson}>
                    <Text style={leaderboardStyles.noMargin}>3</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>Courtney</Text>
                    <Text>{"\n"}</Text>
                    <Text>2600</Text>
                </View>
            </View>
            <View style={leaderboardStyles.tabs}>
                <View style={leaderboardStyles.tab}>
                    <Text style={leaderboardStyles.tabText}>Top</Text>
                </View>
                <View style={leaderboardStyles.tab}>
                    <Text style={leaderboardStyles.tabText}>Local</Text>
                </View>
                <View style={leaderboardStyles.tab}>
                    <Text style={leaderboardStyles.tabText}>Your Tier</Text>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <View style={leaderboardStyles.myTable}>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>4</Text>
                    <Text style={leaderboardStyles.rowText}>Dan</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>5</Text>
                    <Text style={leaderboardStyles.rowText}> Eli</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>6</Text>
                    <Text style={leaderboardStyles.rowText}>Frank</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>7</Text>
                    <Text style={leaderboardStyles.rowText}>Grace</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>8</Text>
                    <Text style={leaderboardStyles.rowText}>Hank</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>9</Text>
                    <Text style={leaderboardStyles.rowText}>Isaac</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>10</Text>
                    <Text style={leaderboardStyles.rowText}>Julia</Text>
                    <Text style={leaderboardStyles.rowText}>2600</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>. . .</Text>
                    <Text style={leaderboardStyles.rowText}></Text>
                    <Text style={leaderboardStyles.rowText}></Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>246</Text>
                    <Text style={leaderboardStyles.rowText}>Kevin</Text>
                    <Text style={leaderboardStyles.rowText}>205</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowTextBold}>246</Text>
                    <Text style={leaderboardStyles.rowTextBold}>Will</Text>
                    <Text style={leaderboardStyles.rowTextBold}>200</Text>
                </View>
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>247</Text>
                    <Text style={leaderboardStyles.rowText}>Leigh</Text>
                    <Text style={leaderboardStyles.rowText}>190</Text>
                </View>
            </View>
        </View>
    );
}

export default LeaderboardScreen;