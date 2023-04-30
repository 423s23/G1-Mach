import { StyleSheet } from "react-native";
let color = "rgb(108, 207, 246)";
const commonStyles = StyleSheet.create({
  backButtonBox: {
    position: "absolute",
    left: 10,
    top: 35,
  },
  backArrow: {
    color: "#000000",
  },
  backButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
export default commonStyles;
