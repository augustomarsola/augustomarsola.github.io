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
    text-align: center;
    line-height: 1.4;
  }

  .homeButtons {
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      border: 2px solid var(--primary);
      border-radius: 2rem;
      padding: 0.5rem;
      color: var(--primary);
      transition: color 0.3s;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: 110%;
        height: 110%;
        top: -120%;
        background: var(--primary);
        transition: top 0.4s ease-in-out;
      }

      &:hover {
        color: var(--secondary);
        &::after {
          top: 0;
        }
      }
    }
  }

  @media (min-width: 720px) {
    gap: 0.75rem;

    .homeDescription {
      font-size: 2rem;
      /* line-height: 2.5rem; */
    }

    .homeButtons {
      a {
        padding: 0.75rem;
      }
    }
  }
`;
