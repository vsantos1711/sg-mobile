import React, { useState } from "react";
import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../TextInput";
import Btn from "../Btn";

const fEntrar = () => {
  console.log({ user, senha });
};

const FormLogin = () => {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.Form>
      <S.Title>LOGIN</S.Title>
      <TextInput PlaceHolder="Email" Onchange={(text) => setUser(text)} />
      <TextInput
        PlaceHolder="Senha"
        SecureTextEntry={true}
        Onchange={(text) => setPassword(text)}
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
