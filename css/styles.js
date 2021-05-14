import { StyleSheet } from "react-native";

export const styleFormat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0EEEE",
  },

  logo: {
    width: 150,
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "contain",
  },
  btnApp: {
    marginTop: 180,
    flexDirection: "row",
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "silver",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: "#87CEFA",
  },
  btn: {
    backgroundColor: "#F0FFFF",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
