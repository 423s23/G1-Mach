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
                    <Pressable onPress={() => navigation.navigate("SubmitTask")}>
                        <Text style={submitTaskScreenStyles.backButton}>{'❮'}</Text>
                    </Pressable>
                </View>

                <View style={submitTaskScreenStyles.headerBox}>
                    <Text style={submitTaskScreenStyles.headerText}>Submit Task Help</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Order Team Apparel (100 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>In order to be eligible for the Incentive Program you must order a team suit. Include a picture of the receipt (MAX 1)</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Order Team Bundle (200 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>The team bundle includes ordering team tri-suit, t-shirt, socks, and hat. Include a picture of the receipt (MAX 1)</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Birthday (10 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Celebrate your birthday with an easy 10 points! Let the athlete director know it's your birthday and earn 10 points every new calendar year</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Place Mach in Zwift (10 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>By placing Mach in your Zwift avatar handle, you'll earn 10 points every new calendar year. Include a link to your Zwift page</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Place Mach in IG (10 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>By placing @machappareltri in your Instagram bio, you'll earn 10 points every new calendar year. Include a link to your IG page</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Write a Blog (200 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Organize a blog post with the Athletic Director that brings value to readers (MAX of 12 per year). Include a link or screenshot to the post</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Write a Review (5 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>For every review you write, you will earn 5 points (MAX of 1 per product). Include a screenshot of the review</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Race in Mach Kit (5 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Everytime you race in your kit you receive 5 points. Be sure to include when and where you raced</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Send Photo (10 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Include a link to where a quality photo can be found. Ex: Instagram post, Imgur, etc.</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Create Social Media Post (10 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Collaborate with Mach via Instagram or TikTok. Include a link to the post</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Refer a Friend (100 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Friend must order Team Apparel. Include the name of your friend and a screenshot of the receipt</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Sold Unit via Commission Code (200 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Someone uses your ATHLETE15 code. Include a screenshot of the receipt</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Mach Highlighted in Magazine (300 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Introduce Mach to someone who manages Triathlete magazine, Triradar, USAT, etc. Include which outlet you connected with</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Create a UGC Video (300 points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>Create an interesting User Generated Content video. Include a link to the video</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}>Custom Request (CUSTOM points)</Text>
                    <Text style={submitTaskScreenStyles.infoText}>If you have coordinated a custom request with the Athlete Director, follow his directions and submit this task</Text>
                </View>

                <View style={submitTaskScreenStyles.infoBox}>
                    <Text style={submitTaskScreenStyles.infoHeader}></Text>
                    <Text style={submitTaskScreenStyles.infoText}></Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default SubmitTaskHelpScreen;
