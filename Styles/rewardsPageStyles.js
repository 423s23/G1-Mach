import {StyleSheet} from "react-native";

const rewardsPageStyles = StyleSheet.create({
    backButtonBox:{
            position: 'absolute',
            left: 15,
            top: 45,

        },
        backArrow:{
            color: '#000000',
        },
    headerBlock:{
        height: 90,
        backgroundColor: "#6ccff6",
        width: "100%",
    },
    headerContent:{
        position: "absolute",
        bottom: 5,
        width: "100%",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    rewardItem:{
        margin: 0,
        height: 60,
        backgroundColor: "#6ccff6",
        color: "black",
        fontStyle: "italic",
        fontSize: 40,
        width: "75%",
        marginLeft: "40%",
        marginBottom: 10,
        display: "flex",
    },
    tierTitle:{
        marginBottom: 5,
        marginRight: 10,
        height: 20,
        color: "black",
        fontSize: 20,
        width: "100%",
        display: "flex",
        textAlign: "right",
    },
    divider:{
        marginBottom: 10,
        height: 5,
        backgroundColor: "black",
        display: "flex",
        width: "100%"
    },
});

export default rewardsPageStyles;