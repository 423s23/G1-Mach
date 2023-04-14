import {StyleSheet} from "react-native";
let color = 'rgb(108, 207, 246)'
const approvalStyles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        textAlign: "center",
    },
    p: {
        width: "80%",
    },
    buttons: {
        display: "flex",

        // justifyContent: "space-between",
    },
    redButton: {
        backgroundColor: "red",
        aspectRatio: 1,
        borderRadius: "50%",
        textAlign: "center",
        width: "25vw",
    },
    greenButton: {
        backgroundColor: "green",
        aspectRatio: 1,
        borderRadius: "50%",
        textAlign: "center",
        width: "25vw",
        marginLeft: "25vw",
    },
    buttonText: {
        position: "absolute",
        fontSize: "10vw",
        fontWeight: "bold",
        marginTop: "5vw",
        marginLeft: "-3.6vw"
    },
    input: {
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        width: "50%",
        padding: 1,
        borderRadius: 7,
    },
    photo: {
        aspectRatio: "9/16",
        width: "50%",
        backgroundColor: "teal",
    },
});

export default approvalStyles;