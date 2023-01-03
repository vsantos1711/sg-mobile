import * as S from "./styled";
import LogoSG from "../../assets/logos/logo_sgedu.png";
import FormLogin from "../../components/FormLogin";

const TelaLogin = () => {
  return (
    <S.Bg>
      <S.Img source={LogoSG} />
      <FormLogin Title="LOGIN" />
    </S.Bg>
  );
};

export default TelaLogin;
