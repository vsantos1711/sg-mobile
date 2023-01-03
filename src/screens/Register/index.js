import * as S from "./styled";
import LogoSG from "../../assets/logos/logo_sgedu.png";
import FormRegister from "../../components/FormRegister";

const TelaCadastro = () => {
  return (
    <S.Bg>
      <S.Img source={LogoSG} />
      <FormRegister />
    </S.Bg>
  );
};

export default TelaCadastro;
