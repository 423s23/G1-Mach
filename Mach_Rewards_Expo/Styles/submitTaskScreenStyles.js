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
        fontSize: 30,
        fontWeight: 500,
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
        fontWeight: 400,
    },
    uploadImage:{

    },
    submitButton:{

    },
});

export default submitTaskScreenStyles;