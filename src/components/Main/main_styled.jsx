import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`;
export const Main = styled.main`
  height: 190vh;
`;

export const Produtos = styled.section`
  background-color: #ffc72c;
  height: 100vh;
`;

export const ImgAmpliada = styled.div`
width: 50vw;

img {
  width: 10vw;
}
`;

export const Texto = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 2.7rem;
    font-weight: bold;
    width: 33vw;
    position: relative;
    left: 63vw;
    color: white;
  }

  span {
    color: #db0007;
  }
`;

export const figure = styled.figure`
  cursor: pointer;
  img {
    ${center}
  }

`;
export const Promocao = styled.section`
background-color: #FEB706;
height: 90vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    height: 30vh;
    color: white;
}
`;

export const Center = styled.div`
width: 85vw;
${center}
justify-content: space-around;
`;

export const Card = styled.div`
height: 40vh;
text-align: center;
background-color: white;
border-radius: 13px;
p{
   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor:pointer;
    &:hover {
      opacity: 0.4;
    }
}
`;