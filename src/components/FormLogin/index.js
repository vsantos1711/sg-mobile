import * as S from "./styled";
import TextInput from "../TextInput";

const FormLogin = ({ Title }) => {
  return (
    <S.Form>
      <S.Title>{Title}</S.Title>
      <TextInput PlaceHolder="Email" />
    </S.Form>
  );
};

export default FormLogin;
