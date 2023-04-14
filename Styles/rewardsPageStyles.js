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
    pressableRewardClaimed:{
        margin: 0,
        height: 40,
        backgroundColor: "#6ccff6",
        color: "black",
        fontStyle: "italic",
        fontSize: 20,
        width: "80%",
        marginLeft: "20%",
        marginBottom: 10,
        display: "flex",
    },
    pressableRewardUnclaimed:{
        margin: 0,
        height: 40,
        backgroundColor: "#90EE90",
        color: "black",
        fontStyle: "italic",
        fontSize: 20,
        width: "80%",
        marginLeft: "20%",
        marginBottom: 10,
        display: "flex",
    },
    pressableRewardLocked:{
        margin: 0,
        height: 40,
        backgroundColor: "#808080",
        color: "black",
        fontStyle: "italic",
        fontSize: 20,
        width: "80%",
        marginLeft: "20%",
        marginBottom: 10,
        display: "flex",
    },
    tierTitle:{
        marginBottom:  5,
        marginRight: 10,
        height: 35,
        color: "black",
        fontSize: 30,
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
    footer:{
        height: 120,
        backgroundColor: "#6ccff6",
        width: "100%",
    },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: "75%",
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  button:{
      margin: 0,
        height: 40,
        backgroundColor: "#6ccff6",
        color: "black",
        fontStyle: "italic",
        fontSize: 20,
        width: "80%",
        marginLeft: "20%",
        marginBottom: 10,
        display: "flex",
  },
  buttonOpen: {
    backgroundColor: "#6ccff6",
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default rewardsPageStyles;