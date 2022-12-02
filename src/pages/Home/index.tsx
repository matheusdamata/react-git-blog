import { useCallback, useEffect, useState } from 'react'
import { UserProfile } from './components/UserProfile'
import {
  Container,
  IssueContent,
  IssuesContainer,
  IssueTitle,
  SearchContainer,
  SearchTitleContent,
} from './styles'

import api from '../../lib/axios'

import { repoIssues } from '../../@types/global-types'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')

  const [repoIssues, setRepoIssues] = useState<repoIssues[]>([])

  const navigate = useNavigate()

  const fetchDataUser = useCallback(async () => {
    const json = await api.getIssues()
    setRepoIssues(() => json)
  }, [])

  useEffect(() => {
    fetchDataUser()
  }, [fetchDataUser])

  function handleOpenIssue(number: number, data: repoIssues) {
    navigate(`/issue/${number}`, {
      state: data,
    })
  }

  return (
    <Container>
      <UserProfile />

      <SearchContainer>
        <SearchTitleContent>
          <strong>Publicações</strong>
          <span>{repoIssues?.length} publicações</span>
        </SearchTitleContent>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => setSearch(() => event.target.value)}
          value={search}
        />
      </SearchContainer>

      <IssuesContainer>
        {repoIssues
          .filter((issue) =>
            search === ''
              ? issue
              : issue.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((issue) => (
            <IssueContent
              key={issue?.id}
              onClick={() => handleOpenIssue(issue?.number, issue)}
            >
              <IssueTitle>
                <h1>{issue?.title}</h1>
                <span>
                  {formatDistanceToNow(new Date(issue?.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </IssueTitle>
              <p>{issue?.body}</p>
            </IssueContent>
          ))}
      </IssuesContainer>
    </Container>
  )
}
