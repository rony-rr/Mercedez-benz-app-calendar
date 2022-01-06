import { StyleSheet } from "react-native";
import GlobalVars from "../../global/globalVars";
const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: GlobalVars.black,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },

  viewScrolling: {
    width: "100%",
    height: "60%",
  },

  viewScroll: {
    flex: 1,
    backgroundColor: GlobalVars.black,
    width: "100%",
  },

  contentContainer: {
    alignItems: "center",
    paddingBottom: 25,
  },
});

export default styles;
