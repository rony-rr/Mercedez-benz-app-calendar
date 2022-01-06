import { StyleSheet } from "react-native";
import GlobalVars from "../../../global/globalVars";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: GlobalVars.black,
    paddingHorizontal: 20,
  },

  labelHeader: {
    color: GlobalVars.white,
    marginTop: 10,
    fontSize: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 50,
  },

  title: {
    fontSize: 22,
    color: GlobalVars.white,
    marginTop: 15,
    fontFamily: GlobalVars.fontFamily
  },

  btn: {
    backgroundColor: "#31CA25",
    width: "45%",
    paddingVertical: 5,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 7,
    marginVertical: 25,
  },

  btnLabel: {
    color: "white",
    fontSize: 20,
  },

  imgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default styles;
