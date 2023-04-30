import {Image, Text, View, StyleSheet, Pressable} from "react-native";
import leaderboardStyles from "../Styles/leaderboardStyle";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import commonStyles from "../Styles/commonStyles";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore, collection, getDocs} from "firebase/firestore";
import {render} from "react-dom";

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
let users = [];
let lower = [];
signInWithEmailAndPassword(auth, "joey.knappenberger@gmail.com", "Joey2001*")
    .then(async () => {
        //get all users
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            users.push([doc.data()['firstName'], doc.data()['currentPoints']])
        });
        users.push(['test', 200]);
        users = users.sort((a, b) => b[1] - a[1]);
        console.log(users);

        for (let i = 3; i < Math.min(10, users.length); i++) {
            lower.push(
                <View style={leaderboardStyles.myRow}>
                    <Text style={leaderboardStyles.rowText}>{i+1}</Text>
                    <Text style={leaderboardStyles.rowText}>{users[i][0]}</Text>
                    <Text style={leaderboardStyles.rowText}>{users[i][1]}</Text>
                </View>
            );
        }
    });

function LeaderboardScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={commonStyles.backButtonBox}>
                        <Pressable style={commonStyles.backButton} onPress={() => navigation.navigate("Home")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={commonStyles.backArrow}
                            />
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
                    <Text>{users[1][0]}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{users[1][1]}</Text>
                </View>
                <View style={leaderboardStyles.person}>
                    <Text style={leaderboardStyles.one}>1</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>{users[0][0]}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{users[0][1]}</Text>
                </View>
                <View style={leaderboardStyles.outerPerson}>
                    <Text style={leaderboardStyles.noMargin}>3</Text>
                    <Image
                        style={leaderboardStyles.personImg}
                        source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                    <Text>{users[2][0]}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{users[2][1]}</Text>
                </View>
            </View>

            {/*<View style={leaderboardStyles.tabs}>*/}
            {/*    <View style={leaderboardStyles.tab}>*/}
            {/*        <Text style={leaderboardStyles.tabText}>Top</Text>*/}
            {/*    </View>*/}
            {/*    <View style={leaderboardStyles.tab}>*/}
            {/*        <Text style={leaderboardStyles.tabText}>Local</Text>*/}
            {/*    </View>*/}
            {/*    <View style={leaderboardStyles.tab}>*/}
            {/*        <Text style={leaderboardStyles.tabText}>Your Tier</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <View style={leaderboardStyles.myTable}>
                {lower}
                {/*<View style={leaderboardStyles.myRow}>*/}
                {/*    <Text style={leaderboardStyles.rowText}>. . .</Text>*/}
                {/*    <Text style={leaderboardStyles.rowText}></Text>*/}
                {/*    <Text style={leaderboardStyles.rowText}></Text>*/}
                {/*</View>*/}
                {/*<View style={leaderboardStyles.myRow}>*/}
                {/*    <Text style={leaderboardStyles.rowText}>246</Text>*/}
                {/*    <Text style={leaderboardStyles.rowText}>Kevin</Text>*/}
                {/*    <Text style={leaderboardStyles.rowText}>205</Text>*/}
                {/*</View>*/}
                {/*<View style={leaderboardStyles.myRow}>*/}
                {/*    <Text style={leaderboardStyles.rowTextBold}>246</Text>*/}
                {/*    <Text style={leaderboardStyles.rowTextBold}>Will</Text>*/}
                {/*    <Text style={leaderboardStyles.rowTextBold}>200</Text>*/}
                {/*</View>*/}
                {/*<View style={leaderboardStyles.myRow}>*/}
                {/*    <Text style={leaderboardStyles.rowText}>247</Text>*/}
                {/*    <Text style={leaderboardStyles.rowText}>Leigh</Text>*/}
                {/*    <Text style={leaderboardStyles.rowText}>190</Text>*/}
                {/*</View>*/}
            </View>
        </View>
    );
}

export default LeaderboardScreen;
