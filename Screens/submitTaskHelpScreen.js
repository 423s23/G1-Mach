import {Button, Pressable, ScrollView, Text, View, StyleSheet, Picker, TextInput} from "react-native";
import styles from "../Styles/styles";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles.js";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function SubmitTaskHelpScreen({ navigation }) {

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                <View style={submitTaskScreenStyles.backButtonBox}>
                    <Pressable style={submitTaskScreenStyles.backButton} onPress={() => navigation.navigate("SubmitTask")}>
                        <Ionicons
                            name={'ios-arrow-back-circle-outline'}
                            size={40}
                            style={submitTaskScreenStyles.backArrow}
                        />
                    </Pressable>
                </View>

                <View style={submitTaskScreenStyles.headerBox}>
                    <Text style={submitTaskScreenStyles.headerText}>Submit Task Help</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Order Team Apparel</Text>
                    <Text style={submitTaskScreenStyles.infoText}>In order to be eligible for the Incentive Program you must oder a team suit</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default SubmitTaskHelpScreen;