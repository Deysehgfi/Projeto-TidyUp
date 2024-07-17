import { Rodape, BoxNav, BoxFooter, SocialMidia, ImgIconsSocial,TextFooter} from "../styled/App"
import ImgInstagram from '../image/Img-Instagram.png'
import ImgWhatsApp from '../image/Img-WhatsApp.png'
import ImgGitHub from '../image/Img-GitHub.png'

const Footer = () => {
  return(
  <>
  <Rodape> 
    <BoxFooter>
    <BoxNav>
    Navegue por aqui
    deheh
     </BoxNav>
     <SocialMidia>
     <ImgIconsSocial src={ImgInstagram} alt="Logo do Instagram" />
 
     <ImgIconsSocial src={ImgWhatsApp} alt="Logo do Instagram" />
     <ImgIconsSocial src={ImgGitHub} alt="Logo do Instagram" />
     </SocialMidia>
    </BoxFooter>
    <TextFooter>Todos os direitos reservados</TextFooter>
  </Rodape>
  </>

  )

}

export default Footer; 