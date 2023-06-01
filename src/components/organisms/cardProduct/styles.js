import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars";

const styles = StyleSheet.create({
  container: {
    width: "50%",
    marginBottom: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 5,
    marginVertical: 5,
    height: GlobalVars.windowHeight / 4,
    width: GlobalVars.windowWidth / 2.2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  viewText: {
    width: "90%",
  },
});

export default styles;
