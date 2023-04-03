import {StyleSheet} from "react-native";

const userInfoScreenStyles = StyleSheet.create({
    starBox:{
        margin: '0.9375em',
        marginTop: '0.32em',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    levelBox:{
        padding: '0.5em',
        margin: '0.9375em',
        borderStyle: "solid",
        borderWidth: '0.13em',
        borderRadius: '0.32em',
        borderColor: "gray",
        backgroundColor: "#eeeeee",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    nameText:{
        width: '80%',
        fontSize: '1.75em',
        color: '#6ccff6',
        fontWeight: 400,
        textAlign: "left",
    },
    userText:{
        width: '80%',
        fontSize: '1.375em',
        color: '#000000',
        fontWeight: 400,
        textAlign: "center",
        marginVertical: '0.625em',
    },
    statsText:{
        width: '80%',
        fontSize: '1.375em',
        color: '#000000',
        fontWeight: 400,
        textAlign: "left",
        marginVertical: '0.875em',
    },
    levelingBox:{
        flex: .1,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    levelText:{
        fontSize: '1.375em',
        width: '40%',
        color: '#000000',
        fontWeight: 400,
        textAlign: 'left',
        paddingVertical: '0.32em',
    },
    pointText:{
        fontSize: '1.25em',
        width: '50%',
        color: '#6ccff6',
        fontWeight: 300,
        textAlign: 'right',
        paddingVertical: '1.25em',
    },
    progressBox:{
        marginVertical: '1.25em',
        flex: .2,
        width: '80%',
        flexDirection: 'row',
    },
    progressBarBackground:{
        position: 'absolute',
        height: '0.9375em',
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: '0.13em',
        borderRadius: '0.9375em',
    },
    progressBar:{
        position: 'absolute',
        height: '0.9375em',
        width: '50%',
        backgroundColor: '#6ccff6',
        borderColor: '#000000',
        borderWidth: '0.13em',
        borderRadius: '0.9375em',
    },
    star:{
        margin:'0.625em'
    },
});

export default userInfoScreenStyles;