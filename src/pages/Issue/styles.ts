import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  width: 54rem;

  margin-top: -6%;

  h1 {
    font-size: 1.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  width: 54rem;
  height: 13.25rem;

  padding: 2rem;

  border-radius: 10px;

  background: ${(props) => props.theme['base-profile']};

  h1 {
    font-size: 1.5rem;
  }
`

export const PageOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  button {
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};

    border: 0;

    background: transparent;

    cursor: pointer;

    & > svg {
      margin-right: 0.5rem;
    }
  }

  a {
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    &:hover {
      text-decoration: underline;
    }

    & > svg {
      margin-left: 0.5rem;
    }
  }
`

export const UserIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  color: ${(props) => props.theme['base-span']};

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

export const BodyIssue = styled.p`
  margin-top: 2.5rem;

  color: ${(props) => props.theme['base-text']};
`
