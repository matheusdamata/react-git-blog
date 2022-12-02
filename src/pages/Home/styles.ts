import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 54rem;
`

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  input {
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};

    background: ${(props) => props.theme['base-input']};

    &::placeholder {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const SearchTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  strong {
    font-size: 1.125rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const IssuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`

export const IssueContent = styled.div`
  padding: 2rem;

  border-radius: 10px;
  border: 2px solid transparent;

  background: ${(props) => props.theme['base-post']};

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  h1 {
    font-size: 1.25rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const IssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
