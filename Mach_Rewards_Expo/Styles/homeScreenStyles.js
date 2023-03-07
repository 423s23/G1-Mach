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
    star:{
        margin:10
    }

});

export default homeScreenStyles;