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

  input: {
    width: 300,
    padding: 5,
    marginBottom: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
  },
  btnCadastro: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#87CEFA",
    padding: 20,
    width: 200,
    marginRight: "auto",
    borderRadius: 50,
    marginLeft: "auto",
    borderColor: "black",
  },

  txtCadastro: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  cxinput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    elevation: 5,
    marginLeft: 5,
    marginLeft: 10,
  },
});
