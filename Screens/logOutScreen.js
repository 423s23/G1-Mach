import {Button, Pressable, ScrollView, StyleSheet} from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View} from "react-native";
//import styles from "../Styles/styles";
import settingsScreenStyles from "../Styles/settingsScreenStyles";
import {Ionicons} from "@expo/vector-icons";

function LogOutScreen({ navigation }) {
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
<Text style={settingsScreenStyles.nameText}>Log Out</Text>
        </View>
    );
}

export default LogOutScreen;