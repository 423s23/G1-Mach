import {AppRegistry, Image, Button, Pressable, ScrollView, Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import styles from "../Styles/rewardsPageStyles";
import {Ionicons} from "@expo/vector-icons";

function RewardsScreen({ navigation }) {
    
    return (
       
        <View>
        <View style = {styles.headerBlock}>
        <Text style={styles.headerContent}>MACH REWARDS</Text> 
        </View>
        <View style={styles.backButtonBox}>
                        <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
                            <Ionicons
                                name={'ios-arrow-back-circle-outline'}
                                size={40}
                                style={styles.backArrow}
                            />
                        </Pressable>
                    </View>
        <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.tierTitle}> First Tier</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItem}> Reward 1</Text> 
                <Text style={styles.rewardItem}> Reward 2</Text> 
                <Text style={styles.rewardItem}> Reward 3</Text> 
                <Text style={styles.rewardItem}> Reward 4</Text> 
                <Text style={styles.rewardItem}> Reward 5</Text>
                <Text style={styles.tierTitle}> Second Tier</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItem}> Reward 1</Text> 
                <Text style={styles.rewardItem}> Reward 2</Text> 
                <Text style={styles.rewardItem}> Reward 3</Text> 
                <Text style={styles.rewardItem}> Reward 4</Text> 
                <Text style={styles.rewardItem}> Reward 5</Text> 
        </View>
        </ScrollView>
      </View>
    );
}

export default RewardsScreen;
