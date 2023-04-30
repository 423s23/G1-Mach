import {Image, Button, Pressable, ScrollView, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        storage()
        .ref('/' + 'WillSki.jpg') //name in storage in firebase console
        .getDownloadURL()
        .then((url) => {
         setImageUrl(url);
         })
        .catch((e) => console.log('Errors while downloading => ', e));
    }, []);

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

function SettingsScreen({ navigation }) {
        const profilePic = 75;
        let Name = userData.firstName + " " + userData.lastName;

    return (
    <ScrollView>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={settingsScreenStyles.profilePicBox}>
        {/*        <Ionicons
                    name={"person-circle-outline"}
                    size={profilePic}
                    style={settingsScreenStyles.profilePic}
                />*/}
                <Image
                    source={{uri: 'https://www.williamjordan.net/images/WillSki.jpg'}}
                    style={settingsScreenStyles.profilePic}
                />
                <Text style={settingsScreenStyles.nameText}>{[Name]}</Text>
            </View>

           <View style={settingsScreenStyles.mainButtonBox}>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("ContactInfo")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Contact Info</Text>
               </Pressable>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("Notifications")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Notifications</Text>
               </Pressable>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("Help")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Help</Text>
               </Pressable>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("LogOut")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Log Out</Text>
               </Pressable>
           </View>
        </View>
       </ScrollView>
    );
}

export default SettingsScreen;