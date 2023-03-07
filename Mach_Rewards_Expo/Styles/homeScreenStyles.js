import {StyleSheet} from "react-native";

const homeScreenStyles = StyleSheet.create({
    starBox:{
        margin: 15,
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    levelBox:{
        padding: 8,
        margin: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius:5,
        borderColor: "gray",
        backgroundColor: "#eeeeee",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    nameText:{
        fontSize: 28,
        color: '#6ccff6',
        fontWeight: 400,
        textAlign: "left",
        marginRight: 250,

    },
    levelingBox:{
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    levelText:{
        fontSize: 24,
        color: '#6ccff6',
        fontWeight: 400,
        textAlign: 'left',
        marginRight: 225,
    },
    pointText:{
        fontSize: 20,
        color: '#6ccff6',
        fontWeight: 300,
        textAlign: 'right',
        bottom: 0,
    },
    progressBox:{
        marginVertical: 20,
        flex: .2,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    progressBarBackground:{
        position: 'absolute',
        height: 20,
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
    },
    progressBar:{
        justifyContent: 'left',
        alignItems: 'left',
        height: 20,
        width: '50%',
        backgroundColor: '#6ccff6',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 200,
    },
    mainButtonBox: {
        width: '100%',
        flex: 2,
        flexDirection: 'column',
        marginVertical: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    mainButton: {
        marginVertical: 16,
        margin: 8,
        height: 60,
        backgroundColor: "#6ccff6",
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
    },
    star:{
        margin:10
    },
});

export default homeScreenStyles;