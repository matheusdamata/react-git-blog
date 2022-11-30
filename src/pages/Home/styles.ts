import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const SearchContainer = styled.div`
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
