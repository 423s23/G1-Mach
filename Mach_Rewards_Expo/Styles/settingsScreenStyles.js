import {StyleSheet} from "react-native";

const settingsScreenStyles = StyleSheet.create({
    /* mainBox: {
       width: "100%",
       flex: 3,
       flexDirection: 'column',
       alignContent: 'center',
       alignItems: 'center',
    },*/
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
    /* mainButton: {
    marginVertical: 16,
    margin: 8,
    height: 125,
    color: "black",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    },
    mainButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    },*/

    /*    first: {
    width: '80%',
    display: "grid",
    gridTemplateAreas: "siva",
    backgroundColor: "#6ccff6",
    gridAutoRows: "auto",
    flex: 2,
    borderWidth: 1,
    marginBottom: 25,
    },

    second: {
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "#6ccff6",
    padding: 50,
    borderWidth: 1,
    flex: 2,
    },*/

    /*    logOut: {
        color: "#ff0000",
        fontWeight: 800,
        fontSize: 18,
        alignSelf: "center",
        margin: 15,
    },*/

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