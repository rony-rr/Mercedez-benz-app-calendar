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
    fontSize: 17,
    marginTop: 20,
    textAlign: "justify",
    fontFamily: "Daimler",
    lineHeight: 22
  },

  btnCreate: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#45B5EA",
    marginTop: 20,
    fontFamily: GlobalVars.fontFamily
  },

  viewScroll: {
    flex: 1,
    width: "100%",
  },

  contentContainer: {
    alignItems: "center",
    paddingBottom: GlobalVars.windowHeight > 750 ? 30 : 100,
  },
});

export default Styles;
