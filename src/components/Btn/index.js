import * as S from "./styled";

const Btn = ({ TextButton, OnPress }) => {
  return (
    <S.Btn onPress={OnPress}>
      <S.TextBtn>{TextButton}</S.TextBtn>
    </S.Btn>
  );
};

export default Btn;
