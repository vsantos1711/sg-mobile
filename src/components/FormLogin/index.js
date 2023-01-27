import React, { useState } from "react";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../TextInput";
import Btn from "../Btn";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  const fEntrar = () => {
    if (email == "admin" && password == "admin") {
      navigate("Home");
    }
  };

  return (
    <S.Form>
      <S.Title>LOGIN</S.Title>
      <TextInput PlaceHolder="Email" OnChangeText={(text) => setEmail(text)} />
      <TextInput
        PlaceHolder="Senha"
        SecureTextEntry={true}
        OnChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Btn
        TextButton="ACESSAR"
        OnPress={() => {
          fEntrar();
        }}
      />
      <S.Text01>Não possui acesso?</S.Text01>
      <Btn
        TextButton="CADASTRE-SE"
        OnPress={() => {
          navigate("Register");
        }}
      />
    </S.Form>
  );
};

export default FormLogin;
