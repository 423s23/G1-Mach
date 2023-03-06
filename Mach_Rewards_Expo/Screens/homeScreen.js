import {Button, Pressable, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./styles";

function HomeScreen({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
        </View>
    );
}

export default HomeScreen;