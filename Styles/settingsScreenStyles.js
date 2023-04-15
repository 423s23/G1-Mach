import {StyleSheet} from "react-native";

const settingsScreenStyles = StyleSheet.create({
    nameText:{
        width: '80%',
        fontSize: 18,
        color: '#000000',
        fontWeight: 600,
        textAlign: "center",
        marginTop: 10,
    },

    pageTitleText:{
            width: '80%',
            fontSize: 20,
            color: '#000000',
            fontWeight: 600,
            textAlign: "left",
            paddingTop: 50,
            backgroundColor:'#ffffff',
    },

    infoText:{
        width: '80%',
        fontSize: 18,
        color: '#000000',
        fontWeight: 600,
        textAlign: "center",
        paddingVertical: 25,
        backgroundColor: "#ffffff",
    },

    profilePicBox:{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    profilePic:{
        padding: 50,
        borderRadius: 50,
    },

    contactProfilePic:{
        borderRadius: 50,
        padding: 50,
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
        alignContent: 'center',
        alignItems: 'center',
    },

    contactInfoBox: {
        width: '100%',
        flex: 3.5,
        flexDirection: 'column',
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
    backButtonBox:{
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ffffff',
    },
    backButton:{

    },

    backArrow:{
        color: '#000000',
    },

    logOutButtonBox:{
            bottom: 0,
            width: '100%',
            flex: 1,
            marginVertical: 40,
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 400,
        },

        logOutButton:{
            width: '80%',
            margin: 10,
            height: 45,
            backgroundColor: '#ff0000',
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 50,
        },

        logOutButtonText:{
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 500,
            color: "#ffffff",
        },
        toggleBox:{
            marginTop: 100,
        }

});

export default settingsScreenStyles;