import {Button, Pressable, ScrollView, Text, View, StlyeSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import homeScreenStyles from "../Styles/homeScreenStyles";
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

function HomeScreen({ navigation }) {
    const starSize = 30;
    let Name = "";
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
                <View style={homeScreenStyles.mainButtonBox}>
                    <Pressable style={homeScreenStyles.mainButton} onPress={() => navigation.navigate("SubmitTask")}>
                        <Text style={homeScreenStyles.mainButtonText}>Submit Task Completion</Text>
                    </Pressable>
                    <Pressable style={homeScreenStyles.mainButton} onPress={() => navigation.navigate("Rewards")}>
                        <Text style={homeScreenStyles.mainButtonText}>Rewards</Text>
                    </Pressable>
                    <Pressable style={homeScreenStyles.mainButton} onPress={() => navigation.navigate("Leaderboard")}>
                        <Text style={homeScreenStyles.mainButtonText}>Team Leaderboard</Text>
                    </Pressable>
                    <Pressable style={homeScreenStyles.mainButton} onPress={() => navigation.navigate("AdminApproval")}>
                        <Text style={homeScreenStyles.mainButtonText}>Admin Approval</Text>
                    </Pressable>
                </View>   
            </View>
        </ScrollView>
    );
}

export default HomeScreen;