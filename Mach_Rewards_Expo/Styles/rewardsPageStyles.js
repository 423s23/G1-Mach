import {StyleSheet} from "react-native";

const rewardsPageStyles = StyleSheet.create({
    headerBlock:{
        marginBottom: 100,
        height: 100,
        backgroundColor: "#6ccff6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
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
        alignItems: "center",
        justifyContent: "center",
    },
    tierTitle:{
        marginBottom: 5,
        marginRight: 10,
        height: 20,
        color: "black",
        fontSize: 20,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        textAlign: "right"
    },
    divider:{
        marginBottom: 10,
        height: 5,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
});

export default rewardsPageStyles;