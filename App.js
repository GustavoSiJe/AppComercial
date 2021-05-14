import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styleFormat } from "./css/styles";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";

const pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen name="Login" component={Login} />
        <pilha.Screen name="Cadastro" component={Cadastro} />
      </pilha.Navigator>
    </NavigationContainer>
  );
}
function TelaInicial({ navigation }) {
  return (
    <View style={styleFormat.container}>
      <Image
        source={{
          uri:
            "http://mentaldv.weebly.com/uploads/6/9/0/8/6908997/799013700.png?262",
        }}
        style={styleFormat.logo}
      />
      <View style={styleFormat.btnApp}>
        <TouchableOpacity
          style={styleFormat.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="login" size={30} color="black" />
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleFormat.btn}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <AntDesign name="adduser" size={30} color="black" />
          <Text>Cadastro</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
