import {StyleSheet} from "react-native";

const submitTaskScreenStyles = StyleSheet.create({
    headerBox:{
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '80%',
    },
    headerText:{
        width: '100%',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 700,
    },
    dropDownTask:{
        flex: 1,
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
        height: 250,
        width: '80%',
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 22,
        //fontWeight: 400,
    },
    uploadImageBox:{
        margin: 10,
        backgroundColor: '#6ccff6',
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center'
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
        marginVertical: 35,
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
        marginTop: 10,
    },
});

export default submitTaskScreenStyles;