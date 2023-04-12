import {Button, Pressable, ScrollView, StyleSheet} from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View} from "react-native";
//import styles from "../Styles/styles";
import settingsScreenStyles from "../Styles/settingsScreenStyles";
import {Ionicons} from "@expo/vector-icons";

function LanguagesScreen({ navigation }) {
        const flagPic = 50;
        let country = "Dylan";
        let language = "English"

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <View style={settingsScreenStyles.backButtonBox}>
                        <Pressable style={settingsScreenStyles.backButton} onPress={() => navigation.navigate("Home")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={submitTaskScreenStyles.backArrow}
                            />
                        </Pressable>
<Text style={settingsScreenStyles.nameText}>Language: English</Text>
                    </View>

        </View>
    );
}

export default LanguagesScreen;