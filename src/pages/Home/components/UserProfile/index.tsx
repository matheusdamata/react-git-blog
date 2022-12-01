import { useCallback, useEffect, useState } from 'react'
import {
  Container,
  UserContainer,
  UserIconCompany,
  UserIconContent,
  UserIcons,
  UserTitleContent,
} from './styles'

import api from '../../../../lib/axios'

import { dataUserGitProps } from '../../../../@types/global-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUser,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function UserProfile() {
  const [dataUserGit, seDataUserGit] = useState<dataUserGitProps>()

  const fetchDataUser = useCallback(async () => {
    const userJson = await api.getUserInfo('matheusdamata')
    const json = await api.getIssues()
    console.log(json)
    seDataUserGit(() => userJson)
  }, [])

  useEffect(() => {
    fetchDataUser()
  }, [fetchDataUser])

  return (
    <Container>
      <img src={dataUserGit?.avatar_url} alt="Imagem do perfil do usuário" />
      <UserContainer>
        <UserTitleContent>
          <h1>{dataUserGit?.name}</h1>
          <a href={dataUserGit?.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={16} />
          </a>
        </UserTitleContent>
        <p>{dataUserGit?.bio}</p>
        <UserIcons>
          <UserIconContent>
            <FontAwesomeIcon icon={faGithub} fontSize={18} />
            <span>{dataUserGit?.login}</span>
          </UserIconContent>

          <UserIconContent>
            <FontAwesomeIcon icon={faBuilding} fontSize={18} />
            {dataUserGit?.company ? (
              <UserIconCompany>{dataUserGit?.company}</UserIconCompany>
            ) : (
              <UserIconCompany isCompany={false}>Not Available</UserIconCompany>
            )}
          </UserIconContent>

          <UserIconContent>
            <FontAwesomeIcon icon={faUser} fontSize={18} />
            <span>{dataUserGit?.followers}</span>
          </UserIconContent>
        </UserIcons>
      </UserContainer>
    </Container>
  )
}
