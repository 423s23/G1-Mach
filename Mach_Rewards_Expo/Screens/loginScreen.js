import * as React from "react";
import {SafeAreaView, Text, TextInput, View, StyleSheet, Button, Pressable, Image} from "react-native";
import styles from "./styles";
function LoginScreen({ navigation }){
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={require('./MachLogo.png')}
                style = {styles.logo}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
            />
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate("HomeTabs")}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.halfButtonLeft} onPress={() => navigation.navigate("HomeTabs")}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
                <Pressable style={styles.halfButtonRight} onPress={() => navigation.navigate("HomeTabs")}>
                    <Text style={styles.buttonText}>Recover</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;