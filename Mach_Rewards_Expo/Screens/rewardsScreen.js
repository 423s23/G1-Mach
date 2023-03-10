import {AppRegistry, Image, Button, Pressable, ScrollView, Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import ProgressCircle from 'react-native-progress-circle'
import styles from "../Styles/styles";


function RewardsScreen({ navigation }) {
    
    return (
       
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.stackedReward}> Hello </Text> 
        <Text style={styles.stackedReward}> Hello 1</Text> 
        <Text style={styles.stackedReward}> Hello 2 </Text> 
        <Text style={styles.stackedReward}> Hello 3 </Text> 
        <Text style={styles.stackedReward}> Hello 4 </Text> 
        <Text style={styles.stackedReward}> Hello 5 </Text> 
            </View>
        </ScrollView>
    );
}

export default RewardsScreen;