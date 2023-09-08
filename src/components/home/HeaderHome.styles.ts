import styled from "styled-components";

export const Content = styled.div`
  min-height: 100vh;
  overflow-x: hidden;

  .homeMainContent {
    min-height: calc(100vh - 9rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .homeDescription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: 1.4;

    div {
      display: inline-block;
      overflow: hidden;

      p {
        display: inline-block;
      }
    }
  }

  @media (min-width: 720px) {
    gap: 0.75rem;

    .homeDescription {
      font-size: 2rem;
      /* line-height: 2.5rem; */
    }
  }
`;
