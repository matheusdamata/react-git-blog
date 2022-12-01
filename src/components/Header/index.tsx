import { Container } from './styles'

import Banner from '../../assets/user/banner.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  function handleClickHome() {
    navigate('/')
  }

  return (
    <Container>
      <img
        src={Banner}
        alt="Banner do perfil do usuário"
        onClick={handleClickHome}
      />
    </Container>
  )
}
