import { styled } from "styled-components";

export const Cores = {
    cianoMedio: '#006666',
    cianoClaro: '#008584',
    branco: '#f5f5f5',
    cinza: '#cccccc',
    cianoEscuro: '#005555',
    cianoExtraEscuro: '#004141',
    AzulClaro: '#CBF8FB',
    cinzaSombra: '#0000009c'


}

export const BoxCard = styled.div`
background-color: ${Cores.AzulClaro};
max-width: 400px;
max-height: 500px;
min-width: 300px;
border-radius:20px;
box-shadow:10px 10px 50px ${Cores.cinzaSombra};
overflow: hidden;
transition: 0.5s;
margin: 20px;
&:hover{
    transform: scale(1.02);
}
@media screen and (max-width:770px){
   flex-direction: column;
   gap: 100px;
   &:hover{
    transform: scale(1);
   }
  }
`

export const BoxInfoCard = styled.div`
 background-image: linear-gradient(to right,${Cores.cianoClaro}, ${Cores.cianoEscuro}); 
align-items: center;
display: flex;
flex-direction: column;
padding-bottom: 25px;


`

export const ImgCard = styled.img`
width: 100%;
height:285px;
`

export const BoxImgCard = styled.div`
width: 400px;
overflow: hidden;
@media screen and (max-width:770px){
  height: 250px;
  }
`

export const TituleCard = styled.h1`
text-align: center;
font-size: 45px ;
font-family: "Josefin Sans", sans-serif;
padding: 35px;
@media screen and (max-width:770px){
    font-size: 35px;
     }
`

export const ConteudoCard = styled.div`

`

export const TextCard = styled.div`
color: ${Cores.branco};
font-size: 20px;
width:250px;
text-align: center;
font-family: "Josefin Sans", sans-serif;
font-weight: 400;

`