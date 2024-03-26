import logo from "../../assets/logo 1.png";
import google from "../../assets/google play.png";
import store from "../../assets/app store.png";
import * as S from "./footer_styled";

export default function Footer() {
  return (
   <S.Footer>               
        <S.Mc>
        <img src={logo} alt="" />
        <h2>© McDonald’s 2024</h2>
        </S.Mc>
        <S.Apps>
        <img src={google} alt="" />
        <img src={store} alt="" />
        </S.Apps>
   </S.Footer>
  )
}