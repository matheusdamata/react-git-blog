import {
  BodyIssue,
  Container,
  Content,
  PageOptions,
  UserIconContent,
  UserIcons,
} from './styles'

import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Issue() {
  const { state } = useLocation()
  const navigate = useNavigate()

  function handleBackPage() {
    navigate(-1)
  }

  console.log(state)

  return (
    <Container>
      <Content>
        <PageOptions>
          <button onClick={handleBackPage}>
            <FontAwesomeIcon icon={faAngleLeft} fontSize={14} />
            VOLTAR
          </button>
          <a href={state?.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={14} />
          </a>
        </PageOptions>

        <h1>{state?.title}</h1>

        <UserIcons>
          <UserIconContent>
            <FontAwesomeIcon icon={faGithub} fontSize={18} />
            <span>matheusdamata</span>
          </UserIconContent>

          <UserIconContent>
            <FontAwesomeIcon icon={faCalendarDay} fontSize={18} />
            {formatDistanceToNow(new Date(state?.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </UserIconContent>

          <UserIconContent>
            <FontAwesomeIcon icon={faComment} fontSize={18} />
            <span>{state?.comments}</span>
          </UserIconContent>
        </UserIcons>
      </Content>

      <BodyIssue>{state?.body}</BodyIssue>
    </Container>
  )
}
