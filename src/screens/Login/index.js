import * as S from "./styled";
import LogoSG from "../../assets/logos/logo_sgedu.png";
import FormLogin from "../../components/FormLogin";

const TelaLogin = () => {
  return (
    <S.Bg>
      <S.Form>
        <S.Img source={LogoSG} />
        <FormLogin />
      </S.Form>
    </S.Bg>
  );
};

export default TelaLogin;
