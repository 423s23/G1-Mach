import {Button, Pressable, ScrollView, Text, View, StlyeSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../Styles/styles";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles.js";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";
import { TextInput } from "react-native-web";

function SubmitTaskScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={submitTaskScreenStyles.headerText}>

                </View>
                <TextInput

                />
                <TextInput

                />
                <Pressable style={submitTaskScreenStyles.uploadImage} onPress={() => navigation.navigate("SubmitTask")}>

                </Pressable>
                <Pressable style={submitTaskScreenStyles.submitButton} onPress={() => navigation.navigate("SubmitTask")}>
                    
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default SubmitTaskScreen;