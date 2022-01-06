import { StyleSheet } from "react-native";
import GlobalVars from "../../global/globalVars";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: '100%',
  },

  background: {
    flex: 1,
    width: '100%',
    height: GlobalVars.windowHeight,
  },

  imgProfile: {
    marginTop: 10,
    borderRadius: 50,
    height: 90,
    width: 90,
  },

  cardContentIcon: {
    width: "30%",
    alignItems: "center",
  },

  cardContentLabel: {
    width: "60%",
    justifyContent: "center",
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    paddingVertical: 25,
    borderColor: "white",
    borderBottomWidth: 0.5,
  },

  card2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    paddingVertical: 25,
    borderColor: "black",
    borderBottomWidth: 0.5,
  },

  name: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default styles;
