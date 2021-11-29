import GlobalVars from "../../global/globalVars";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: GlobalVars.windowHeight,
    alignItems: "center",
  },

  info: {
    color: "white",
    fontSize: 15,
    marginTop: 20,
    textAlign: "justify",
    fontFamily: "Daimler",
  },

  btnCreate: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#45B5EA",
    marginTop: 20,
  },
});

export default Styles;
