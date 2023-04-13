import {AppRegistry, Image, Button, Pressable, ScrollView, Text, View, StyleSheet, Alert, Modal} from "react-native";
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
                <Pressable style={styles.pressableRewardClaimed}>
                <Text>Stickers</Text> 
                </Pressable>
<Pressable style={styles.pressableRewardClaimed}>
                <Text> Tattoo</Text> 
</Pressable>
<Pressable style={styles.pressableRewardClaimed}>
                <Text> Socks</Text> 
</Pressable>
<Pressable style={styles.pressableRewardClaimed}>
                <Text> Hat</Text>
</Pressable>
<Pressable style={styles.pressableRewardUnclaimed}>
                <Text> Coffee Mug</Text>
</Pressable>
<Pressable style={styles.pressableRewardUnclaimed}>
                <Text> Beanie</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> T-Shirt</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Hoodie</Text>
</Pressable>
                <Text style={styles.tierTitle}> Mach Star</Text>
                <Text style={styles.divider}></Text> 
<Pressable style={styles.pressableRewardLocked}>
                <Text> Transition Towel</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Mach Gloves</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Base Layer</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Gilet</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Cycling Jacket</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Running Shoes</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Tri-Shorts</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Tri-Jersey</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Swimwear</Text> 
</Pressable>
                <Text style={styles.tierTitle}> Mach Icon</Text>
                <Text style={styles.divider}></Text> 
<Pressable style={styles.pressableRewardLocked}>
                <Text> $150 Store Credit</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Mystery Reward</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> 2024 Team Shirt</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> 2024 Team Tri-Suit</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> 2024 Cycling Bibs</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Tri-Suit</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Cycling Kit</Text> 
</Pressable>
                <Text style={styles.tierTitle}> Mach Hero</Text>
                <Text style={styles.divider}></Text> 
<Pressable style={styles.pressableRewardLocked}>
                <Text> Team Tri-Bag</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Custom Race Week Shirt</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Custom Tri-Suit</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Reward 3</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> USAT Membership</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> 3 Race Entries</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Round Trip Race</Text> 
</Pressable>
                <Text style={styles.tierTitle}> Mach Legend</Text>
                <Text style={styles.divider}></Text> 
<Pressable style={styles.pressableRewardLocked}>
                <Text> Trip to Train</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Mystery Reward</Text>
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Day in the Life</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> World Championships</Text> 
</Pressable>
<Pressable style={styles.pressableRewardLocked}>
                <Text> Free Team Bundle FOR LIFE</Text> 
</Pressable>
                <Text style={styles.footer}></Text>
        </View>
        </ScrollView>
      </View>
    );
}

export default RewardsScreen;
