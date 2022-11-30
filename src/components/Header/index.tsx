import { Container } from './styles'

import Banner from '../../assets/user/banner.svg'

export function Header() {
  return (
    <Container>
      <img src={Banner} alt="Banner do perfil do usuário" />
    </Container>
  )
}
