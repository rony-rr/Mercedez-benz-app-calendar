import { StyleSheet } from "react-native";

import GlobalVars from "../../global/globalVars";

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
  },

  imgProfile: {
    marginTop: 15,
    borderRadius: 50,
    height: 90,
    width: 90,
  },

  input: {
    marginTop: 40,
    textAlign: "left",
    color: "white",
    fontSize: 20,
    width: "90%",
    borderBottomWidth: 0.5,
    borderColor: "white",
  },
});

export default Styles;
