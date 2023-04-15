import {StyleSheet} from "react-native";

const submitTaskScreenStyles = StyleSheet.create({
    headerBox:{
        marginTop: 70,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        width: '80%',
    },
    headerText:{
        width: '100%',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 700,
    },
    dropDownTask:{
        flex: .5,
        width: '80%',
        textAlign: 'center',
    },
    selectTask:{
        width: '100%',
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 400,
    },
    taskText:{
        width: '100%',
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 400,
    },
    insertText:{
        height: 450,
        width: '80%',
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 22,
        zIndex: -5,
        textAlignVertical: 'top',
    },
    uploadImageBox:{
        flex: 1.4,
        margin: 10,
        backgroundColor: '#6ccff6',
        width: 150,
        //height: 150,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadImage:{
        color: '#000000',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'center',
    },
    submitButtonBox:{
        bottom: 0,
        width: '100%',
        flex: 1,
        marginVertical: 40,
        //marginBottom: 100,      //TODO Delete this line of code
        alignContent: 'center',
        alignItems: 'center',
    },
    submitButton:{
        width: '80%',
        margin: 10,
        height: 45,
        backgroundColor: '#6ccff6',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
    },
    submitButtonText:{
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 500,
    },
    plus:{
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 25,
        marginBottom: 10,
    },
    helpButtonBox:{
        position: 'absolute',
        right: 0,
        top: 0,
        marginTop: 35,
        marginRight: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ffffff',
    },
    helpButton:{
    },
    helpCircle:{
        color: '#000000',
    },
    backButtonBox:{
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: 35,
        marginLeft: 10,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ffffff',
    },
    backButton:{
        color: '#6ccff6',
        fontSize: 25,

    },
    backArrow:{
        color: '#000000',
    },
    infoBox:{
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
        width: '90%',
    },
    infoHeader:{
        width: '100%',
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 600,
        color: '#6ccff6'
    },
    infoText:{
        width: '100%',
        marginLeft: 15,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 500,
        color: '#000000'
    },
});

export default submitTaskScreenStyles;