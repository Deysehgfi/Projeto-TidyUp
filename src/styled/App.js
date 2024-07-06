import { styled } from "styled-components";

export const Cores = {
    cianoEcuro:'#006666',
    cianoClaro:'#008584',
    branco:'#f5f5f5',
    cinza: '#cccccc'


}

export const HeaderNav = styled.header`
display: flex;
gap: 70px;
padding: 30px;
margin-left: 50px;
`
export const Nav = styled.nav`
background-color: ${Cores.branco};
box-shadow: 4px 4px 10px #0000005a ;
border: ${Cores.cinza} 1px solid;
height: 70px;
width: 1299px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: end;
gap: 40px;
padding-right: 60px;

`

export const LogoBox = styled.div`
background-color: ${Cores.branco};
box-shadow: 4px 4px 10px #0000005a;
border: ${Cores.cinza} 1px solid;
width: 232px;
height: 70px;
border-radius: 10px;
display: flex;
align-items: center;
`
export const Logo = styled.img`
height: 60px;
width: 160px;
padding: 25px;
`

