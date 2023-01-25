import * as S from "./styled";

const TextInput = ({
  PlaceHolder,
  SecureTextEntry,
  KeyboardType,
  OnChangeText,
}) => {
  return (
    <S.TextInput
      onChangeText={OnChangeText}
      placeholder={PlaceHolder}
      secureTextEntry={SecureTextEntry}
      keyboardType={KeyboardType}
    />
  );
};

export default TextInput;
