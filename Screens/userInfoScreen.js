import {Button, Pressable, ScrollView, Text, View, StyleSheet, Modal} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import userInfoScreenStyles from "../Styles/userInfoScreenStyles";
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

function getProgressPercent(currentPoints, previousPoints, progressPoints) {
    let progressPercentInt = (((currentPoints - previousPoints) / (progressPoints - previousPoints)) * 100);
    var progressPercent = progressPercentInt.toString() + "%";
    return progressPercent
}

function getFullProgressPercent(currentPoints) {
    if (currentPoints < 50000) {
        let fullProgressPercentInt = ((currentPoints / 50000) * 100);
        var fullProgressPercent = fullProgressPercentInt.toString() + "%";
    }
    else if (currentPoints >= 50000) {
        let fullProgressPercentInt = 100;
        var fullProgressPercent = fullProgressPercentInt.toString() + "%";
    }
    return fullProgressPercent
}

function calcAllPoints(currentPoints) {
    // rank, level, previousPoints, progressPoints
    var dataArray = [0, 0, 0, 0];

    // RANK 1 (Mach Badass)
    if (currentPoints >= 0 && currentPoints < 1750) {
        dataArray[0] = 1;
        // LEVEL 1
        if (currentPoints >= 100 && currentPoints < 300) {
            dataArray[1] = 1; dataArray[2] = 100; dataArray[3] = 300;
        }
        // LEVEL 2
        if (currentPoints >= 300 && currentPoints < 500) {
            dataArray[1] = 2; dataArray[2] = 300; dataArray[3] = 500;
        }
        // LEVEL 3
        if (currentPoints >= 500 && currentPoints < 700) {
            dataArray[1] = 3; dataArray[2] = 500; dataArray[3] = 700;
        }
        // LEVEL 4
        if (currentPoints >= 700 && currentPoints < 900) {
            dataArray[1] = 4; dataArray[2] = 700; dataArray[3] = 900;
        }
        // LEVEL 5
        if (currentPoints >= 900 && currentPoints < 1100) {
            dataArray[1] = 5; dataArray[2] = 900; dataArray[3] = 1100;
        }
        // LEVEL 6
        if (currentPoints >= 1100 && currentPoints < 1300) {
            dataArray[1] = 6; dataArray[2] = 1100; dataArray[3] = 1300;
        }
        // LEVEL 7
        if (currentPoints >= 1300 && currentPoints < 1500) {
            dataArray[1] = 7; dataArray[2] = 1300; dataArray[3] = 1500;
        }
        // LEVEL 8
        if (currentPoints >= 1500 && currentPoints < 1750) {
            dataArray[1] = 8; dataArray[2] = 1500; dataArray[3] = 1750;
        }
    }
    // RANK 2 (Mach Star)
    if (currentPoints >= 1750 && currentPoints < 4500) {
        dataArray[0] = 2;
        // LEVEL 9
        if (currentPoints >= 1750 && currentPoints < 2000) {
            dataArray[1] = 9; dataArray[2] = 1750; dataArray[3] = 2000;
        }
        // LEVEL 10
        if (currentPoints >= 2000 && currentPoints < 2250) {
            dataArray[1] = 10; dataArray[2] = 2000; dataArray[3] = 2250;
        }
        // LEVEL 11
        if (currentPoints >= 2250 && currentPoints < 2500) {
            dataArray[1] = 11; dataArray[2] = 2250; dataArray[3] = 2500;
        }
        // LEVEL 12
        if (currentPoints >= 2500 && currentPoints < 2750) {
            dataArray[1] = 12; dataArray[2] = 2500; dataArray[3] = 2750;
        }
        // LEVEL 13
        if (currentPoints >= 2750 && currentPoints < 3000) {
            dataArray[1] = 13; dataArray[2] = 2750; dataArray[3] = 3000;
        }
        // LEVEL 14
        if (currentPoints >= 3000 && currentPoints < 3250) {
            dataArray[1] = 14; dataArray[2] = 3000; dataArray[3] = 3250;
        }
        // LEVEL 15
        if (currentPoints >= 3250 && currentPoints < 3500) {
            dataArray[1] = 15; dataArray[2] = 3250; dataArray[3] = 3500;
        }
        // LEVEL 16
        if (currentPoints >= 3500 && currentPoints < 4000) {
            dataArray[1] = 16; dataArray[2] = 3500; dataArray[3] = 4000;
        }
        // LEVEL 17
        if (currentPoints >= 4000 && currentPoints < 4500) {
            dataArray[1] = 17; dataArray[2] = 4000; dataArray[3] = 4500;
        }
    }
    // RANK 3 (Mach Icon)
    if (currentPoints >= 4500 && currentPoints < 10000) {
        dataArray[0] = 3;
        // LEVEL 18
        if (currentPoints >= 4500 && currentPoints < 5000) {
            dataArray[1] = 18; dataArray[2] = 4500; dataArray[3] = 5000;
        }
        // LEVEL 19
        if (currentPoints >= 5000 && currentPoints < 5500) {
            dataArray[1] = 19; dataArray[2] = 5000; dataArray[3] = 5500;
        }
        // LEVEL 20
        if (currentPoints >= 5500 && currentPoints < 6000) {
            dataArray[1] = 20; dataArray[2] = 5500; dataArray[3] = 6000;
        }
        // LEVEL 21
        if (currentPoints >= 6000 && currentPoints < 6500) {
            dataArray[1] = 21; dataArray[2] = 6000; dataArray[3] = 6500;
        }
        // LEVEL 22
        if (currentPoints >= 6500 && currentPoints < 7000) {
            dataArray[1] = 22; dataArray[2] = 6500; dataArray[3] = 7000;
        }
        // LEVEL 23
        if (currentPoints >= 7000 && currentPoints < 7500) {
            dataArray[1] = 23; dataArray[2] = 7000; dataArray[3] = 7500;
        }
        // LEVEL 24
        if (currentPoints >= 7500 && currentPoints < 10000) {
            dataArray[1] = 24; dataArray[2] = 7500; dataArray[3] = 10000;
        }
    }
    // RANK 4 (Mach Hero)
    if (currentPoints >= 10000 && currentPoints < 30000) {
        dataArray[0] = 4;
        // LEVEL 25
        if (currentPoints >= 10000 && currentPoints < 12500) {
            dataArray[1] = 25; dataArray[2] = 10000; dataArray[3] = 12500;
        }
        // LEVEL 26
        if (currentPoints >= 12500 && currentPoints < 15000) {
            dataArray[1] = 26; dataArray[2] = 12500; dataArray[3] = 15000;
        }
        // LEVEL 27
        if (currentPoints >= 15000 && currentPoints < 17500) {
            dataArray[1] = 27; dataArray[2] = 15000; dataArray[3] = 17500;
        }
        // LEVEL 28
        if (currentPoints >= 17500 && currentPoints < 20000) {
            dataArray[1] = 28; dataArray[2] = 17500; dataArray[3] = 20000;
        }
        // LEVEL 29
        if (currentPoints >= 20000 && currentPoints < 22500) {
            dataArray[1] = 29; dataArray[2] = 20000; dataArray[3] = 22500;
        }
        // LEVEL 30
        if (currentPoints >= 22500 && currentPoints < 25000) {
            dataArray[1] = 30; dataArray[2] = 22500; dataArray[3] = 25000;
        }
        // LEVEL 31
        if (currentPoints >= 25000 && currentPoints < 30000) {
            dataArray[1] = 31; dataArray[2] = 25000; dataArray[3] = 30000;
        }
    }
    // RANK 5 (Mach Legend)
    if (currentPoints >= 30000) {
        dataArray[0] = 5;
        // LEVEL 32
        if (currentPoints >= 30000 && currentPoints < 35000) {
            dataArray[1] = 32; dataArray[2] = 30000; dataArray[3] = 35000;
        }
        // LEVEL 33
        if (currentPoints >= 35000 && currentPoints < 40000) {
            dataArray[1] = 33; dataArray[2] = 35000; dataArray[3] = 40000;
        }
        // LEVEL 34
        if (currentPoints >= 40000 && currentPoints < 45000) {
            dataArray[1] = 34; dataArray[2] = 40000; dataArray[3] = 45000;
        }
        // LEVEL 35
        if (currentPoints >= 45000 && currentPoints < 50000) {
            dataArray[1] = 35; dataArray[2] = 45000; dataArray[3] = 50000;
        }
        // LEVEL 36
        if (currentPoints >= 50000) {
            dataArray[1] = 36; dataArray[2] = (currentPoints - 5000); dataArray[3] = currentPoints;
        }
    }

    return dataArray;
}

function UserInfoScreen({ navigation }) {
    const starSize = 30;
    let Name = userData.firstName + " " + userData.lastName;
    let CurrentPoints = userData.currentPoints;
    var dataArray = calcAllPoints(CurrentPoints);
    let Rank = dataArray[0];
    let Level = dataArray[1];
    let PreviousPoints = dataArray[2];
    let ProgressPoints = dataArray[3];
    let Admin = userData.admin;
    let taskTotal = 0;
    let Titles = [
        "Not Yet Verified",
        "Mach Badass",
        "Mach Star",
        "Mach Icon",
        "Mach Hero",
        "Mach Legend"];
    const [modalVisibleRanks, setModalVisibleRanks] = React.useState(false);

    function IsAdmin({adminCheck}) {
        if (adminCheck) {
            return (
                <Pressable style={homeScreenStyles.mainButton} onPress={() => navigation.navigate("AdminApproval")}>
                    <Text style={homeScreenStyles.mainButtonText}>Admin Approval</Text>
                </Pressable>
            );
        }
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                <Text style={homeScreenStyles.nameText}>Hello {[Name]},</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleRanks}
                    onRequestClose={() => {
                    Alert.alert('Modal has been close.');
                    setModalVisibleRanks(!modalVisibleRanks)
                }}>
                <View style={homeScreenStyles.centeredView}>
                    <View style={homeScreenStyles.modalView}>
                        <Text style={homeScreenStyles.modalText}>Rank 1: Mach Badass</Text>
                        <Text style={homeScreenStyles.modalText}>Rank 2: Mach Star</Text>
                        <Text style={homeScreenStyles.modalText}>Rank 3: Mach Icon</Text>
                        <Text style={homeScreenStyles.modalText}>Rank 4: Mach Hero</Text>
                        <Text style={homeScreenStyles.modalText}>Rank 5: Mach Legend</Text>
                        <Pressable
                            style={[homeScreenStyles.popupButton, homeScreenStyles.buttonClose]}
                            onPress={() => setModalVisibleRanks(!modalVisibleRanks)}>
                        <Text style={homeScreenStyles.popupTextStyle}>Hide Pop-up</Text>
                        </Pressable>
                    </View>
                </View>
                </Modal>
                <View style={homeScreenStyles.levelBox}>
                    <Pressable onPress={() => setModalVisibleRanks(true)}>
                        <Text style={homeScreenStyles.headerText}>{Titles[Rank]}</Text>
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
                    </Pressable>
                </View>
                <View style={homeScreenStyles.levelingBox}>
                    <Text style={homeScreenStyles.levelText}>Level {[Level]}</Text>
                    <Text style={homeScreenStyles.pointText}>{[CurrentPoints - PreviousPoints]}pts/{[ProgressPoints - PreviousPoints]}pts</Text>
                </View>
                <View style={homeScreenStyles.progressBox}>
                    <View style={homeScreenStyles.progressBarBackground}></View>
                    <View style={{position: 'absolute', height: 20, width: getProgressPercent(CurrentPoints, PreviousPoints, ProgressPoints), backgroundColor: '#ee2f53', borderColor: '#000000', borderWidth: 2, borderRadius: 5,}}></View>
                </View>
                <View style={homeScreenStyles.levelingBox}>
                    <Text style={homeScreenStyles.levelText}>Level {[Level]}</Text>
                    <Text style={homeScreenStyles.pointText}>{CurrentPoints}pts/50000pts</Text>
                </View>
                <View style={homeScreenStyles.progressBox}>
                    <View style={homeScreenStyles.progressBarBackground}></View>
                    <View style={{position: 'absolute', height: 20, width: getFullProgressPercent(CurrentPoints), backgroundColor: '#ee2f53', borderColor: '#000000', borderWidth: 2, borderRadius: 5,}}></View>
                </View>
                <Text style={userInfoScreenStyles.statsText}>Current Level:   {[Level]}</Text>
                <Text style={userInfoScreenStyles.statsText}>Tasks Completed:   {[taskTotal]}</Text>
            </View>
        </ScrollView>
    );
}

export default UserInfoScreen;