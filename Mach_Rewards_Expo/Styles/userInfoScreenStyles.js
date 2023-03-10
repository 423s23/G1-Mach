import {StyleSheet} from "react-native";

const userInfoScreenStyles = StyleSheet.create({
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
        width: '80%',
        fontSize: 28,
        color: '#6ccff6',
        fontWeight: 400,
        textAlign: "left",
    },
    userText:{
        width: '80%',
        fontSize: 22,
        color: '#000000',
        fontWeight: 400,
        textAlign: "center",
        marginVertical: 10,
    },

    statsText:{
        width: '80%',
        fontSize: 22,
        color: '#000000',
        fontWeight: 400,
        textAlign: "left",
        marginVertical: 14,
    },

    levelingBox:{
        flex: .1,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    levelText:{
        fontSize: 22,
        width: '40%',
        color: '#000000',
        fontWeight: 400,
        textAlign: 'left',
        paddingVertical: 5,
    },
    pointText:{
        fontSize: 20,
        width: '50%',
        color: '#6ccff6',
        fontWeight: 300,
        textAlign: 'right',
        paddingVertical: 20,
    },
    progressBox:{
        marginVertical: 20,
        flex: .2,
        width: '80%',
        flexDirection: 'row',
    },
    progressBarBackground:{
        position: 'absolute',
        height: 15,
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
    },
    progressBar:{
        position: 'absolute',
        justifyContent: 'left',
        height: 15,
        width: '50%',
        backgroundColor: '#6ccff6',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
    },
    star:{
        margin:10
    },
});

export default userInfoScreenStyles;