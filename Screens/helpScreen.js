import {Button,
        Pressable,
        ScrollView,
        Text,
        View,
        StyleSheet,
        Picker,
        TextInput} from "react-native";
import styles from "../Styles/styles";
import submitTaskScreenStyles from "../Styles/submitTaskScreenStyles.js";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function HelpScreen({ navigation }) {

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <View style={submitTaskScreenStyles.backButtonBox}>
                    <Pressable onPress={() => navigation.navigate("Settings")}>
                        <Text style={submitTaskScreenStyles.backButton}>{'❮'}</Text>
                    </Pressable>
                </View>

                <View style={submitTaskScreenStyles.headerBox}>
                    <Text style={submitTaskScreenStyles.headerText}>Help</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Mach Home Page</Text>
                    <Text style={submitTaskScreenStyles.infoText}>If you navigate to the Mach Home page you will see your Mach Status and Mach Progress bar at the top of the screen. Your Mach Status is the specific Mach Stage you currently are. There is Mach ________________________. Your progress bar shows the amount of Mach points you’ve achieved and Mach level reached. Below all of this, you have the option to select ____________.</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Submitting Tasks</Text>
                    <Text style={submitTaskScreenStyles.infoText}>To submit tasks, navigate to the Home page and then select the Submit Task Button. Select the ‘Select Task’ Dropdown menu and choose the desired task. Fill out the text field with whatever is required of the task or use the upload button to upload media. To see the specific requirements of each task, see the submit task help button or click here.
                </Text>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Task Approval</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Submissions will be approved or denied by company leaders within an appropriate amount of time. They will be approved as long as they meet the task criteria and are deemed appropriate. Some tasks will be available to submit more than once while others can only be completed once.
                   </Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Mach Leaderboard</Text>
                    <Text style={submitTaskScreenStyles.infoText}>The Mach leaderboard is a way to view your progress compared to other Mach athletes around the world. You can view your standing on the Mach leaderboard as well as the top Mach athletes.
                   </Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Mach Rewards</Text>
                    <Text style={submitTaskScreenStyles.infoText}></Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>User Info</Text>
                    <Text style={submitTaskScreenStyles.infoText}></Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Settings</Text>
                    <Text style={submitTaskScreenStyles.infoText}></Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Contacting Mach</Text>
                    <Text style={submitTaskScreenStyles.infoText}></Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default HelpScreen;