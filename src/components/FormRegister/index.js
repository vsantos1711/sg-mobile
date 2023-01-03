import * as S from "./styled";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../TextInput";
import Btn from "../Btn";

const FormRegister = () => {
  const { navigate } = useNavigation();

  return (
    <S.Form>
      <S.Title>CADASTRO</S.Title>
      <TextInput PlaceHolder="Email" />
      <TextInput PlaceHolder="Telefone" KeyboardType="numeric" />
      <TextInput PlaceHolder="Senha" SecureTextEntry={true} />
      <Btn
        TextButton="CRIAR"
        OnPress={() => {
          console.log("o botao foi clicado");
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
