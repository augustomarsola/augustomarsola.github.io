import styled from "styled-components";

export const Content = styled.div`
  min-height: 100vh;
  overflow-x: hidden;

  h1 {
    text-align: center;
  }

  .logoAugusto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    span {
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 0.35rem;
      /* font-size: 1.25rem; */
    }
  }
`;
