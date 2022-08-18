import { StyleSheet } from "react-native";
import GlobalVars from "../../global/globalVars";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalVars.black,
    alignItems: "center",
    justifyContent: "center",
  },

  viewScroll: {
    flex: 1,
    width: "100%",
  },

  contentContainer: {
    alignItems: "center",
    paddingBottom: 25,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 600,
    alignItems: "center",
  },

  info: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    textAlign: "left",
  },

  btnCreate: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#45B5EA",
    marginTop: 20,
  },
});
export default styles;
