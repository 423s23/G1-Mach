import {Button, Pressable, ScrollView, StyleSheet} from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View} from "react-native";
//import styles from "../Styles/styles";
import settingsScreenStyles from "../Styles/settingsScreenStyles";
import {Ionicons} from "@expo/vector-icons";
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

    function NotificationsScreen({ navigation }) {
            const profilePic = 30;
            let firstName = userData.firstName;
            let lastName = userData.lastName;
            let email = userData.email;
            let phoneNumber = userData.phoneNumber;
            const birthday = userData.birthday;
            let username = userData.username;
            let notificationStatus = userData.notificationStatus;


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <View style={settingsScreenStyles.backButtonBox}>
                        <Pressable style={settingsScreenStyles.backButton} onPress={() => navigation.navigate("Settings")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={settingsScreenStyles.backArrow}
                            />
                        </Pressable>
                    </View>

        <View style={settingsScreenStyles.toggleBox}>
            <ToggleSwitch
              isOn={userData.notificationStatus}
              onColor="green"
              offColor="red"
              label="Send Push Notifications"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => console.log("changed to : ", isOn)}
            />
            </View>
        </View>
    );
}

export default NotificationsScreen;