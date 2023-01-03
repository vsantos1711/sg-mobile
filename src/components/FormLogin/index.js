import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../TextInput";
import Btn from "../Btn";
import { useState } from "react";

const handleClickCadastro = () => {
  console.log({ user, senha });
};

const FormLogin = () => {
  const { navigate } = useNavigation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <S.Form>
      <S.Title>LOGIN</S.Title>
      <TextInput PlaceHolder="Email" Onchange={(text) => setUser} />
      <TextInput
        PlaceHolder="Senha"
        SecureTextEntry={true}
        Onchange={(text) => setPassword}
      />
      <Btn
        TextButton="ACESSAR"
        OnPress={() => {
          handleClickCadastro();
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
