import {Button, Pressable, ScrollView, StyleSheet} from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View} from "react-native";
//import styles from "../Styles/styles";
import settingsScreenStyles from "../Styles/settingsScreenStyles";
import {Ionicons} from "@expo/vector-icons";

function ContactInfoScreen({ navigation }) {
        const profilePic = 30;
        let firstName = "Dylan";
        let lastName = "lastName"
        let email = "dylan@gmail.com";
        let phoneNum = "444-444-4444";
        const birthday = "04/04/1994";
        let userName = "machDylan";
    return (
     <View style={settingsScreenStyles.backButtonBox}>
                        <Pressable style={settingsScreenStyles.backButton} onPress={() => navigation.navigate("Home")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={settingsScreenStyles.backArrow}
                            />
                        </Pressable>
                    </View>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={settingsScreenStyles.nameText}>{[firstName]} {[lastName]}</Text>

        </View>
    );
}

export default ContactInfoScreen;