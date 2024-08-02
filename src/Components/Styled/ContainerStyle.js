import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: auto;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1.5rem;
  }
`;
