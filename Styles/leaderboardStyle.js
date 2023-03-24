import {StyleSheet} from "react-native";
let color = 'rgb(108, 207, 246)'
const leaderboardStyles = StyleSheet.create({
    header:{
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 40,
        marginTop: 5,
        letterSpacing: 4,
    },
    podium: {
        display: 'inline-flex',
        width: '100%',
    },
    person: {
        marginLeft: '7%',
        width: '24%',
        display: 'block',
        textAlign: "center",
    },
    personImg: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: '50%',
    },
    outerPerson: {
        marginLeft: '7%',
        width: '24%',
        display: 'block',
        textAlign: "center",
        paddingTop: 30,
    },
    line: {
        width: '90%'
    },
    noMargin: {
        margin: 0,
        fontWeight: "bold",
    },
    one: {
        margin: 0,
        fontSize: 20,
        fontWeight: "bold"
    },
    tabs: {
        display: "flex",
        width: "100%",
    },
    tab: {
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        width: "20%",
        marginLeft: "10%",
        textAlign: "center",
    },
    tabText: {
      marginTop: 5,
      marginBottom: 5
    },
    myTable: {
        width: "70%",
    },
    myRow: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },
    rowText: {
      width: '20%'
    },
    rowTextBold: {
        width: '20%',
        fontWeight: "bold"
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default leaderboardStyles;