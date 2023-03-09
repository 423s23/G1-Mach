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
        fontWeight: 400,
    },
    uploadImageBox:{
        //flex: 3,
        margin: 10,
        backgroundColor: '#0000ff',
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center'
    },
    uploadImage:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'center',
    },
    submitButton:{

    },
    plus:{
        color: '#ffffff',
        justifyContent: 'center',
        marginTop: 10,
    },
});

export default submitTaskScreenStyles;