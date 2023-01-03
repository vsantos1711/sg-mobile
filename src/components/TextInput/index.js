import * as S from "./styled";

const TextInput = ({ PlaceHolder, SecureTextEntry, KeyboardType }) => {
  return (
    <S.TextInput
      placeholder={PlaceHolder}
      secureTextEntry={SecureTextEntry}
      keyboardType={KeyboardType}
    />
  );
};

export default TextInput;
