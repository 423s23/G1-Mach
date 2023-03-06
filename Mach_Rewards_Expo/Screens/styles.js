import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: '80%',
        margin: 8,
        borderWidth: 1,
        padding: 10,
        fontSize: 16
    },
    loginButton: {
        margin: 8,
        height: 60,
        backgroundColor: "#6ccff6",
        color: "black",
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    halfButton: {
        margin: 0,
        height: 60,
        backgroundColor: "#6ccff6",
        color: "black",
        width: "48.50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    halfButtonLeft:{
        margin: 0,
        height: 60,
        backgroundColor: "#6ccff6",
        color: "black",
        width: "47.3%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "2.7%"
    },
    halfButtonRight:{
        margin: 0,
        height: 60,
        backgroundColor: "#6ccff6",
        color: "black",
        width: "47.3%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2.7%"
    },
    buttonContainer:{
        margin:8,
        padding:0,
        height:60,
        width: "80%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row"

    },
    buttonText: {

        color: "#ffffff",
        fontWeight: "600",
        fontSize: 18,
        alignSelf: "center",

    },
    logo: {
        marginTop: 60,
        marginBottom: 60,
    }
});

export default styles;