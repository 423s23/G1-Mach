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
    buttons: { display: "flex",
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    redButton: {
        backgroundColor: "red",
        aspectRatio: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: "25%",
    },
    greenButton: {
        backgroundColor: "green",
        aspectRatio: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: "25%",
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 25,
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
    bold: {
        fontWeight: "bold",
    }
});

export default approvalStyles;
