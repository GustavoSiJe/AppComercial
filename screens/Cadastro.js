import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styleFormat } from "../css/styles";

let us = "";
let sh = "";

let cf = "";
let nc = "";
let sx = "";
let iu = "";
let ie = "";
let cc = "";

let lg = "";
let nr = "";
let cp = "";
let br = "";
let ce = "";

let tl = "";
let em = "";

export default function Cadastro() {
  const [usuario, serUsuario] = React.useState("");
  const [senha, setShenha] = React.useState("");

  const [nomecliente, setNomeCliente] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [sexo, setSexo] = React.useState("");

  const [logradouro, setLogradouro] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [complemento, setComplemento] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cep, setCep] = React.useState("");

  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View style={styleFormat.container}>
      <ScrollView horizontal={false}>
        {/*Área de cadastro de usuario */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Usuario"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Senha"
            value={senha}
            keyboardType="default"
            secureTextEntry
            onChangeText={(value) => setSenha(value)}
          />
        </View>
        {/* fim area de cadastro de usuario */}

        {/*Área de cadastro de cliente */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Cliente"
            value={nomecliente}
            keyboardType="email-address"
            onChangeText={(value) => setNomeCliente(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="CPF"
            value={cpf}
            keyboardType="number-pad"
            onChangeText={(value) => setCPF(value)}
          />

          <Picker
            mode="dropdown"
            selectedValue={sexo}
            onValueChange={setSexo}
            style={styleFormat.input}
          >
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
            <Picker.Item label="Outros" value="O" />
          </Picker>
        </View>
        {/* Fim Área de cadastro de cliente */}

        {/*Área de cadastro de endereço */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Logradouro"
            value={logradouro}
            keyboardType="default"
            onChangeText={(value) => setLogradouro(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Número"
            value={numero}
            keyboardType="default"
            onChangeText={(value) => setNumero(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Complemento"
            value={complemento}
            keyboardType="default"
            onChangeText={(value) => setComplemento(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Bairro"
            value={bairro}
            keyboardType="default"
            onChangeText={(value) => setBairro(value)}
          />
          <TextInput
            style={styleFormat.input}
            placeholder="CEP"
            value={cep}
            keyboardType="number-pad"
            onChangeText={(value) => setCep(value)}
          />
        </View>
        {/* Fim Área de cadastro de endereço */}

        {/*Área de cadastro de contato */}
        <View style={styleFormat.cxinput}>
          <TextInput
            style={styleFormat.input}
            placeholder="Telefone"
            value={telefone}
            keyboardType="number-pad"
            onChangeText={(value) => setTelefone(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="E-mail"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        {/* Fim Área de cadastro de contato */}

        <TouchableOpacity style={styleFormat.btnCadastro}>
          <Text style={styleFormat.txtCadastro}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
