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
                <Text style={styles.tierTitle}> Mach Badass</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItemClaimed}> Water Bottle</Text> 
                <Text style={styles.rewardItemClaimed}> Stickers</Text> 
                <Text style={styles.rewardItemClaimed}> Tattoo</Text> 
                <Text style={styles.rewardItemClaimed}> Socks</Text> 
                <Text style={styles.rewardItemUnclaimed}> Hat</Text>
                <Text style={styles.rewardItemUnclaimed}> Coffee Mug</Text> 
                <Text style={styles.rewardItemLocked}> Beanie</Text> 
                <Text style={styles.rewardItemLocked}> T-Shirt</Text> 
                <Text style={styles.rewardItemLocked}> Hoodie</Text> 
                <Text style={styles.tierTitle}> Mach Star</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItemLocked}> Transition Towel</Text> 
                <Text style={styles.rewardItemLocked}> Mach Gloves</Text> 
                <Text style={styles.rewardItemLocked}> Base Layer</Text> 
                <Text style={styles.rewardItemLocked}> Gilet</Text> 
                <Text style={styles.rewardItemLocked}> Cycling Jacket</Text> 
                <Text style={styles.rewardItemLocked}> Running Shoes</Text> 
                <Text style={styles.rewardItemLocked}> Tri-Shorts</Text> 
                <Text style={styles.rewardItemLocked}> Tri-Jersey</Text> 
                <Text style={styles.rewardItemLocked}> Swimwear</Text> 
                <Text style={styles.tierTitle}> Mach Icon</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItemLocked}> $150 Store Credit</Text> 
                <Text style={styles.rewardItemLocked}> Mystery Reward</Text> 
                <Text style={styles.rewardItemLocked}> 2024 Team Shirt</Text> 
                <Text style={styles.rewardItemLocked}> 2024 Team Tri-Suit</Text> 
                <Text style={styles.rewardItemLocked}> 2024 Cycling Bibs</Text> 
                <Text style={styles.rewardItemLocked}> Tri-Suit</Text> 
                <Text style={styles.rewardItemLocked}> Cycling Kit</Text> 
                <Text style={styles.tierTitle}> Mach Hero</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItemLocked}> Team Tri-Bag</Text> 
                <Text style={styles.rewardItemLocked}> Custom Race Week Shirt</Text> 
                <Text style={styles.rewardItemLocked}> Custom Tri-Suit</Text>
                <Text style={styles.rewardItemLocked}> Reward 3</Text> 
                <Text style={styles.rewardItemLocked}> USAT Membership</Text> 
                <Text style={styles.rewardItemLocked}> 3 Race Entries</Text> 
                <Text style={styles.rewardItemLocked}> Round Trip Race</Text> 
                <Text style={styles.tierTitle}> Mach Legend</Text>
                <Text style={styles.divider}></Text> 
                <Text style={styles.rewardItemLocked}> Trip to Train</Text> 
                <Text style={styles.rewardItemLocked}> Mystery Reward</Text> 
                <Text style={styles.rewardItemLocked}> Day in the Life</Text> 
                <Text style={styles.rewardItemLocked}> World Championships</Text> 
                <Text style={styles.rewardItemLocked}> Free Team Bundle FOR LIFE</Text> 
                <Text style={styles.footer}></Text>
        </View>
        </ScrollView>
      </View>
    );
}

export default RewardsScreen;
