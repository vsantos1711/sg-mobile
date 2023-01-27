import * as S from "./styled";
import LogoSG from "../../assets/logos/logo_sgedu.png";
import FormRegister from "../../components/FormRegister";

const TelaLogin = () => {
  return (
    <S.Bg>
      <S.Form>
        <S.Img source={LogoSG} />
        <FormRegister />
      </S.Form>
    </S.Bg>
  );
};

export default TelaLogin;
