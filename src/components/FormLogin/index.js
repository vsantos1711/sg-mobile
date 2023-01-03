import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../TextInput";
import Btn from "../Btn";

const FormLogin = ({ Title }) => {
  const { navigate } = useNavigation();

  return (
    <S.Form>
      <S.Title>LOGIN</S.Title>
      <TextInput PlaceHolder="Email" />
      <TextInput PlaceHolder="Senha" SecureTextEntry={true} />
      <Btn
        TextButton="ACESSAR"
        OnPress={() => {
          console.log("o botao foi clicado");
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
