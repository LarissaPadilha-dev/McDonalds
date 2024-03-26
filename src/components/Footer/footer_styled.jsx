import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Footer = styled.footer`
${center}
justify-content: space-between;
padding-left: 60px;
height: 12vh;
`;

export const Mc = styled.div`
width: 30vw;
${center}
justify-content: space-around;
img {
    width: 3vw; 
    height: 5vh;  
}
h2{
    font-size: 0.8rem;
    font-weight: 700;
    width: 23vw;
}
`;

export const Apps = styled.div`
width: 25vw;
${center}
justify-content: space-around;
cursor: pointer;
`;