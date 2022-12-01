import { Container, PageOptions, UserIconContent, UserIcons } from './styles'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Issue() {
  return (
    <Container>
      <PageOptions>
        <button>VOLTAR</button>
        <a href="" target="_blank" rel="noreferrer">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={14} />
        </a>
      </PageOptions>

      <h1>JavaScript data types and data structures</h1>

      <UserIcons>
        <UserIconContent>
          <FontAwesomeIcon icon={faGithub} fontSize={18} />
          <span>matheusdamata</span>
        </UserIconContent>

        <UserIconContent>
          <FontAwesomeIcon icon={faCalendarDay} fontSize={18} />
        </UserIconContent>

        <UserIconContent>
          <FontAwesomeIcon icon={faComment} fontSize={18} />
          <span>4</span>
        </UserIconContent>
      </UserIcons>
    </Container>
  )
}
