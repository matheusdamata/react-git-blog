import { UserProfile } from './components/UserProfile'
import { Container, SearchContainer, SearchTitleContent } from './styles'

export function Home() {
  return (
    <Container>
      <UserProfile />

      <SearchContainer>
        <SearchTitleContent>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </SearchTitleContent>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>
    </Container>
  )
}
