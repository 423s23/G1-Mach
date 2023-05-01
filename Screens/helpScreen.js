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
import commonStyles from "../Styles/commonStyles";
import {Ionicons} from "@expo/vector-icons";
import * as React from "react";

function HelpScreen({ navigation }) {

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                <View style={commonStyles.backButtonBox}>
                            <Pressable style={commonStyles.backButton} onPress={() => navigation.navigate("Settings")}>
                                <Ionicons
                                    name={'ios-arrow-back-circle-outline'}
                                    size={40}
                                    style={commonStyles.backArrow}
                                />
                            </Pressable>
                        </View>

                    <View style={submitTaskScreenStyles.headerBox}>
                        <Text style={submitTaskScreenStyles.headerText}>Help</Text>
                    </View>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Mach Home Page</Text>
                        <Text style={submitTaskScreenStyles.infoText}>If you navigate to the Mach Home page you will see your Mach Status and Mach Progress bar at the top of the screen. Your Mach Status is the specific Mach Stage you currently are. Your progress bar shows the amount of Mach points you’ve achieved and Mach level reached. Below all of this, you have the option to select some of the apps other features.</Text>
                    </View>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Submitting Tasks</Text>
                        <Text style={submitTaskScreenStyles.infoText}>To submit tasks, navigate to the Home page and then select the Submit Task Button. Select the ‘Select Task’ Dropdown menu and choose the desired task. Fill out the text field with whatever is required of the task or use the upload button to upload media. To see the specific requirements of each task, see the submit task help button or click here.</Text>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Task Approval</Text>
                        <Text style={submitTaskScreenStyles.infoText}>Submissions will be approved or denied by company leaders within an appropriate amount of time. They will be approved as long as they meet the task criteria and are deemed appropriate. Some tasks will be available to submit more than once while others can only be completed once.</Text>
                    </View>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Mach Leaderboard</Text>
                        <Text style={submitTaskScreenStyles.infoText}>The Mach leaderboard is a way to view your progress compared to other Mach athletes around the world. You can view your standing on the Mach leaderboard as well as the top Mach athletes.
                    </Text>
                    </View>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Mach Rewards</Text>
                        <Text style={submitTaskScreenStyles.infoText}>The Rewards page displays all the possible rewards for completing the Mach tasks.</Text>
                    </View>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>User Info</Text>
                        <Text style={submitTaskScreenStyles.infoText}>The user info page shows the users progress in Mach Rewards. You will find two progress bars. One that shows overall progress towards the Mach total points of 50,000 and a personal progress bar that shows your point progress within your own level. Below this, there are other statistics about your Mach Rewards account, such as, number of tasks completed. </Text>
                    </View>

                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Settings</Text>
                        <Text style={submitTaskScreenStyles.infoText}>In the settings page, you can find four options: Contact Info, Notifications, Help, and LogOut. If you select the Contact Info option you will find your personal contact information organised in a table. This page shows where Mach might send your rewards or how they might contact you about your team status. The notifications page is a simple display that allows you to select whether or not you would like to receive notifications from Mach. The help page is what you have selected here. Finally, the LogOut option allows you to LogOut of your Mach app. </Text>
                    </View>

<<<<<<< HEAD
                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Settings</Text>
                    <Text style={submitTaskScreenStyles.infoText}>In the settings page, you can find four options: Contact Info, Notifications, Help, and LogOut. If you select the Contact Info option you will find your personal contact information organised in a table. This page shows where Mach might send your rewards or how they might contact you about your team status. The notifications page is a simple display that allows you to select whether or not you would like to receive notifications from Mach. The help page is what you have selected here. Finally, the LogOut option allows you to LogOut of your Mach app. </Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Contacting Mach</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Questions or concerns? Do not be afraid to contact the Mach team directly!</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Email: Phone:</Text>
=======
                    <View style={submitTaskScreenStyles.infoBox}>
                        <Text style={submitTaskScreenStyles.infoHeader}>Contacting Mach</Text>
                        <Text style={submitTaskScreenStyles.infoText}>Questions or concerns? Do not be afraid to contact the Mach team directly! Email: Phone:</Text>
                    </View>
>>>>>>> 8d8e3bbcb7de91d3e791dac3b3afa43f10bfa505
                </View>
            </View>
            </View>
        </ScrollView>
    );
}

export default HelpScreen;