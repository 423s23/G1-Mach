import {StyleSheet} from "react-native";

const settingsScreenStyles = StyleSheet.create({
    nameText:{
        width: '80%',
        fontSize: 18,
        color: '#000000',
        fontWeight: 600,
        textAlign: "center",
    },
    profilePicBox:{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    profilePic:{
        padding:50,
    },
    listBox: {
    width: '100%',
    backgroundColor: "#6ccff6",
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    },
    mainButtonBox: {
        width: '100%',
        flex: 2,
        flexDirection: 'column',
        marginVertical: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    mainButtonText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "left",
        paddingLeft: 20,
    },
    mainButton: {
        marginVertical: 2,
        paddingVertical: 16,
        margin: 8,
        height: 100,
        backgroundColor: "#6ccff6",
        color: "black",
        width: "80%",
        display: "flex",
        justifyContent: "center"
    },
});

export default settingsScreenStyles;