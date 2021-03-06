import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars";
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "bold",
    fontFamily: GlobalVars.fontFamily,
  },
});

export default styles;
