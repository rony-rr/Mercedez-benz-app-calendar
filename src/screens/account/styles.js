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

  layoutCitas: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },

  viewDate: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: GlobalVars.white,
    borderBottomWidth: 1,
    borderRadius: 7,
    paddingBottom: 10,
    position: "relative",
    zIndex: 1,
  },

  dropDate: {
    position: "absolute",
    width: 25,
    height: 25,
    zIndex: 10,
    right: 10,
  },

  styleLabel: {
    color: GlobalVars.white,
    fontSize: 15,
    marginTop: 20,
    marginBottom: 0,
    textAlign: "left",
  },

  reserved: {
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  labelReserved: {
    color: GlobalVars.white,
    fontFamily: GlobalVars.fontFamily,
    fontWeight: "700",
  },

  floatLogout: {
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: GlobalVars.white,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
  },
});

export default Styles;
