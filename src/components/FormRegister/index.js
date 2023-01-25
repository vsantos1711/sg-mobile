import React, { useState } from "react";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../TextInput";
import Btn from "../Btn";

const FormRegister = () => {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const fCadastrar = () => {
    console.log({ email, phone, password });
  };

  return (
    <S.Form>
      <S.Title>CADASTRO</S.Title>
      <TextInput PlaceHolder="Email" OnChangeText={(text) => setEmail(text)} />
      <TextInput
        PlaceHolder="Telefone"
        KeyboardType="numeric"
        OnChangeText={(text) => setPhone(text)}
      />
      <TextInput
        PlaceHolder="Senha"
        SecureTextEntry={true}
        OnChangeText={(text) => setPassword(text)}
      />
      <Btn
        TextButton="CRIAR"
        OnPress={() => {
          fCadastrar();
        }}
      />
      <S.Text01>Já possui acesso?</S.Text01>
      <Btn
        TextButton="FAÇA LOGIN"
        OnPress={() => {
          navigate("Login");
        }}
      />
    </S.Form>
  );
};

export default FormRegister;
