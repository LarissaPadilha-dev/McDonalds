import React, { useState } from "react";
import * as S from "./main_styled";
import Card from "./Card";
import sofa from "../../assets/mc sofa.png";
import loja from "../../assets/restaurante.png";
import juntos from "../../assets/estamos juntos.png";
import MCbigmac from "../../assets/bigmac 1.png";
import MCbatata from "../../assets/batata.png";
import MCsorvete from "../../assets/sorvete.png";

export default function Main() {
  const [Mc,setMc] = useState(MCbigmac)

    function bigMac(){
      setMc(MCbigmac)
    }

    function batata(){
      setMc(MCbatata)
    }

    function sorvete(){
      setMc(MCsorvete)
    }

  return (
    <S.Main>
      <S.Produtos>
        <S.Texto>
          <p>BATEU AQUELA</p>
          <p>
            <span>#FOME</span> DE <span>MÉQUI?</span>
          </p>
        </S.Texto>
        <S.ImgAmpliada>
          <img src= {Mc} alt="imagem do bigmac" />
        </S.ImgAmpliada>
        <figure>
          <img onClick={bigMac} src={MCbigmac} alt="imagem do bigmac" />
          <img onClick={batata} src={MCbatata} alt="imagem da batata" />
          <img onClick={sorvete} src={MCsorvete} alt="imagem de sorvete" />
        </figure>
      </S.Produtos>
      <S.Promocao>
        <h2>Promoção</h2>
        <S.Center>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
          <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={juntos} texto={"Confira as medidas que o Méqui adotou!"} />
        </S.Center>
      </S.Promocao>
    </S.Main>
  );
}