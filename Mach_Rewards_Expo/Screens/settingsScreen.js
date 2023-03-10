import {Button, Pressable, ScrollView, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View} from "react-native";
//import styles from "../Styles/styles";
import settingsScreenStyles from "../Styles/settingsScreenStyles";
import {Ionicons} from "@expo/vector-icons";

function SettingsScreen({ navigation }) {
        const profilePic = 75;
        let firstName = "Dylan";
        let lastName = "lastName";
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={settingsScreenStyles.profilePicBox}>
                <Ionicons
                    name={"person-circle-outline"}
                    size={profilePic}
                    style={settingsScreenStyles.profilePic}
                />
                <Text style={settingsScreenStyles.nameText}>{[firstName]} {[lastName]}</Text>
            </View>
           <View style={settingsScreenStyles.mainButtonBox}>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("ContactInfo")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Contact Info</Text>
               </Pressable>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("Notifications")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Notifications</Text>
               </Pressable>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("Languages")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Languages</Text>
               </Pressable>
               <Pressable style={settingsScreenStyles.mainButton} onPress={() => navigation.navigate("AdminApproval")}>
                    <Text style={settingsScreenStyles.mainButtonText}>Log Out</Text>
               </Pressable>
           </View>
        </View>
    );
}

export default SettingsScreen;