import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 54rem;
  height: 13.25rem;

  margin-top: -13%;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: auto;

    border-radius: 10px;

    margin-left: 2.5rem;
  }
`

export const UserTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    margin-right: 2rem;

    &:hover {
      text-decoration: underline;
    }

    & > svg {
      margin-left: 0.5rem;
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 2rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    line-height: 1.6;

    margin-bottom: 1.5rem;

    color: ${(props) => props.theme['base-text']};
  }
`

export const UserIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  svg {
    margin-right: 0.5rem;

    color: ${(props) => props.theme['base-label']};
  }
`

export const UserIconContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

type UserIconContentProps = {
  isCompany?: boolean
}

export const UserIconCompany = styled.span<UserIconContentProps>`
  color: ${(props) =>
    props.isCompany ? props.theme.white : props.theme['base-span']};
`
