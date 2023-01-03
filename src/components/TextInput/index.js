import * as S from "./styled";

const TextInput = ({
  PlaceHolder,
  SecureTextEntry,
  KeyboardType,
  Onchange,
}) => {
  return (
    <S.TextInput
      placeholder={PlaceHolder}
      secureTextEntry={SecureTextEntry}
      keyboardType={KeyboardType}
      onChange={Onchange}
    />
  );
};

export default TextInput;
