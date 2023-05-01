import {Image, Button, Pressable, ScrollView, StyleSheet} from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View} from "react-native";
//import styles from "../Styles/styles";
import settingsScreenStyles from "../Styles/settingsScreenStyles";
import commonStyles from "../Styles/commonStyles";
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

    function ContactInfoScreen({ navigation }) {
            const profilePic = 30;
            let firstName = userData.firstName;
            let lastName = userData.lastName;
            let email = userData.email;
            let phoneNumber = userData.phoneNumber;
            const birthday = userData.birthday;
            let username = userData.username;


    return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={settingsScreenStyles.backButtonBox}>
                        <Pressable style={commonStyles.backButton} onPress={() => navigation.navigate("Settings")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={commonStyles.backArrow}
                            />
                        </Pressable>
                    </View>


                    <View style={settingsScreenStyles.profilePicBox}>
                        <Image
                            source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                            style={settingsScreenStyles.contactProfilePic}
                         />
                     </View>
                <View style={settingsScreenStyles.contactInfoBox}>
                    <View style={settingsScreenStyles.mainButton}>
                        <Text style={settingsScreenStyles.mainButtonText}>Name: {[firstName]} {[lastName]}</Text>
                    </View>
                    <View style={settingsScreenStyles.mainButton}>
                        <Text style={settingsScreenStyles.mainButtonText}>Email Address: {[email]}</Text>
                    </View>
                    <View style={settingsScreenStyles.mainButton}>
                        <Text style={settingsScreenStyles.mainButtonText}>Phone Number: {[phoneNumber]}</Text>
                    </View>
                    <View style={settingsScreenStyles.mainButton}>
                        <Text style={settingsScreenStyles.mainButtonText}>Username: {[username]}</Text>
                    </View>
                 </View>

        </View>


    );
}

export default ContactInfoScreen;