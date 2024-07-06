import { Nav , Logo, LogoBox , HeaderNav } from "./styled/App";
import logoImg from './image/Logo-TidyUp.png'


const Header = () => {
    return(
        <>
        <HeaderNav>
        <LogoBox>
            <Logo src={logoImg} alt="Logo Tidy Up" />
        </LogoBox>
        
        <Nav>
<a href="">Home</a>
<a href="">Sobre</a>

        </Nav>

        </HeaderNav>
        </>
    )
}

export default Header;