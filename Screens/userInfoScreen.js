import {Button, Pressable, ScrollView, Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import userInfoScreenStyles from "../Styles/userInfoScreenStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore} from "firebase/firestore";

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

function getProgressPercent() {
    let previousPoints = userData.previousPoints;
    let currentPoints = userData.currentPoints;
    let progressPoints = userData.progressPoints;
    let progressPercentInt = (((currentPoints - previousPoints) / (progressPoints - previousPoints)) * 100);
    var progressPercent = progressPercentInt.toString() + "%";
    return progressPercent
}

function UserInfoScreen({ navigation }) {
     const starSize = 30;
        let firstName = userData.firstName;
        let Level = userData.level;
        let CurrentPoints = userData.currentPoints;
        let ProgressPoints = userData.progressPoints;
        let Rank = userData.rank;
        let registerYear = 2023;
        let taskTotal = 4;
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
                <Text style={userInfoScreenStyles.statsText}>Current Level:   {[Level]}</Text>
                <Text style={userInfoScreenStyles.statsText}>Tasks Completed:   {[taskTotal]}</Text>
                <Text style={userInfoScreenStyles.statsText}>Rewards Received:  {[taskTotal]}</Text>
            </View>
        </ScrollView>
    );
}

export default UserInfoScreen;