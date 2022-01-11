import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
  },

  container: {
    width: "90%",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingTop: 80,
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderWidth: 0.25,
    borderColor: GlobalVars.white,
    backgroundColor: GlobalVars.black,
  },

});

export default styles;
