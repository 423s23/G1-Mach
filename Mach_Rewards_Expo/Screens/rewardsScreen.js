import {AppRegistry, Image, Button, Pressable, ScrollView, Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import styles from "../Styles/rewardsPageStyles";


function RewardsScreen({ navigation }) {
    
    return (
       
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.headerBlock}>User Rewards</Text> 
        <Text style={styles.rewardItem}> Reward 1</Text> 
        <Text style={styles.rewardItem}> Reward 2</Text> 
        <Text style={styles.rewardItem}> Reward 3</Text> 
        <Text style={styles.rewardItem}> Reward 4</Text> 
        <Text style={styles.rewardItem}> Reward 5</Text>
        <Text style={styles.tierTitle}> Next Tier</Text>
        <Text style={styles.divider}></Text> 
        <Text style={styles.rewardItem}> Reward 1</Text> 
        <Text style={styles.rewardItem}> Reward 2</Text> 
        <Text style={styles.rewardItem}> Reward 3</Text> 
        <Text style={styles.rewardItem}> Reward 4</Text> 
        <Text style={styles.rewardItem}> Reward 5</Text> 
            </View>
        </ScrollView>
    );
}

export default RewardsScreen;
